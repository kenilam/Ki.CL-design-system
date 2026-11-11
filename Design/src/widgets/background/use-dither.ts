import React, { useEffect, useState } from 'react';

// Renderer
import { createRenderer } from './dither';

// Partials
import { readNumber, readPalette } from './read';

/** About 15 fps: the drift is slow enough that more only spends battery. */
const FRAME_INTERVAL_MS = 66;

/** Past 2x, drawing per device pixel costs fill rate for detail nobody can see. */
const MAX_PIXEL_RATIO = 2;

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

const useDither = (
  node: React.RefObject<HTMLCanvasElement | null>,
  width: number,
  height: number
) => {
  const [generation, setGeneration] = useState(0);

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
};

export { useDither };
