import React, { useEffect, useState } from 'react';

// Libraries
import classNames from 'classnames';

// Hooks
import { useResizeObserver } from 'design/hooks';

// Spec
import type * as Spec from './spec';

// Renderer
import { createRenderer } from './dither';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--widgets--background';

const PROPERTY = `--${CLASS_NAME}`;

/** About 15 fps: the drift is slow enough that more only spends battery. */
const FRAME_INTERVAL_MS = 66;

/** Past 2x, drawing per device pixel costs fill rate for detail nobody can see. */
const MAX_PIXEL_RATIO = 2;

const MAX_INKS = 6;

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

/**
 * Computed colours can come back as `oklab()`, so a 2D context paints a pixel
 * in each and reads it back as sRGB.
 */
function readPalette(canvas: HTMLCanvasElement): Spec.Palette {
  const styles = window.getComputedStyle(canvas);
  const scratch = document
    .createElement('canvas')
    .getContext('2d', { willReadFrequently: true });

  const parse = (value: string): number | null => {
    const trimmed = value.trim();

    if (!trimmed || !scratch || !CSS.supports('color', trimmed)) {
      return null;
    }

    scratch.clearRect(0, 0, 1, 1);
    scratch.fillStyle = trimmed;
    scratch.fillRect(0, 0, 1, 1);

    const [red, green, blue, alpha] = scratch.getImageData(0, 0, 1, 1).data;

    if (!alpha) {
      return null;
    }

    return (red << 16) | (green << 8) | blue;
  };

  const paper = parse(styles.getPropertyValue(`${PROPERTY}--paper`)) ?? 0;
  const inks: number[] = [];

  for (let index = 1; index <= MAX_INKS; index++) {
    const ink = parse(styles.getPropertyValue(`${PROPERTY}--ink-${index}`));

    if (ink === null) {
      break;
    }

    inks.push(ink);
  }

  return { inks, paper };
}

function readNumber(
  canvas: HTMLCanvasElement,
  name: string,
  fallback: number
): number {
  const value = parseFloat(
    window.getComputedStyle(canvas).getPropertyValue(`${PROPERTY}--${name}`)
  );

  return Number.isFinite(value) && value > 0 ? value : fallback;
}

const Background: React.FunctionComponent<Spec.Props> = ({
  className,
  ...rest
}) => {
  const { node, rect } = useResizeObserver<HTMLCanvasElement>();
  const [generation, setGeneration] = useState(0);

  const width = rect?.width ?? 0;
  const height = rect?.height ?? 0;

  useEffect(() => {
    const canvas = node.current;

    if (!canvas || !width || !height) {
      return;
    }

    const renderer = createRenderer(canvas);

    if (!renderer) {
      return;
    }

    const ratio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO);
    const cell = readNumber(canvas, 'cell', 1) * ratio;
    const levels = readNumber(canvas, 'levels', 48);
    const reducedMotion = window.matchMedia(REDUCED_MOTION);

    renderer.resize(Math.ceil(width * ratio), Math.ceil(height * ratio));

    let palette = readPalette(canvas);
    let frame = 0;
    let last = -Infinity;

    const draw = (now: number) => {
      renderer.draw(now / 1000, palette, cell, levels);
    };

    const loop = (now: number) => {
      frame = window.requestAnimationFrame(loop);

      if (now - last < FRAME_INTERVAL_MS) {
        return;
      }

      last = now;
      draw(now);
    };

    const start = () => {
      window.cancelAnimationFrame(frame);
      draw(performance.now());

      if (!reducedMotion.matches) {
        frame = window.requestAnimationFrame(loop);
      }
    };

    const theme = new MutationObserver(() => {
      palette = readPalette(canvas);
      draw(performance.now());
    });

    theme.observe(document.body, {
      attributeFilter: ['class'],
      attributes: true,
    });

    const onLost = (event: Event) => {
      event.preventDefault();
      window.cancelAnimationFrame(frame);
    };

    const onRestored = () => {
      setGeneration((current) => {
        return current + 1;
      });
    };

    canvas.addEventListener('webglcontextlost', onLost);
    canvas.addEventListener('webglcontextrestored', onRestored);
    reducedMotion.addEventListener('change', start);
    start();

    return () => {
      window.cancelAnimationFrame(frame);
      theme.disconnect();
      canvas.removeEventListener('webglcontextlost', onLost);
      canvas.removeEventListener('webglcontextrestored', onRestored);
      reducedMotion.removeEventListener('change', start);
      renderer.dispose();
    };
  }, [node, width, height, generation]);

  return (
    <canvas
      aria-hidden
      className={classNames(
        CLASS_NAME,
        'kicl-block-size-full',
        'kicl-inline-size-full',
        'kicl-inset-0',
        'kicl-pointer-events-none',
        'kicl-position-absolute',
        className
      )}
      {...rest}
      // After the spread, so a wrapper's ref such as Animation's can't replace it.
      ref={node}
    />
  );
};

type BackgroundProps = Spec.Props;

export { Background, type BackgroundProps };
