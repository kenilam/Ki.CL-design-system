// Spec
import type * as Spec from './spec';

// Constants
import { PROPERTY } from './constants';

const MAX_INKS = 6;

/**
 * Computed colours can come back as `oklab()`, so a 2D context paints a pixel
 * in each and reads it back as sRGB.
 */
export function readPalette(canvas: HTMLCanvasElement): Spec.Palette {
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

export function readNumber(
  canvas: HTMLCanvasElement,
  name: string,
  fallback: number
): number {
  const value = parseFloat(
    window.getComputedStyle(canvas).getPropertyValue(`${PROPERTY}--${name}`)
  );

  return Number.isFinite(value) && value > 0 ? value : fallback;
}
