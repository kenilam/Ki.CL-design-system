// Spec
import type { Pool } from 'design/widgets/background/spec';

/** A fraction of the canvas. */
const DRIFT = 0.1;
const DRIFT_SPEED = 0.5;

/** Drawn in order, last on top. Ink N in the stylesheet colours pool N. */
export function pools(seconds: number): Pool[] {
  const s = seconds * DRIFT_SPEED;

  return [
    {
      angle: 0.35 + 0.1 * Math.sin(s * 0.6),
      rx: 1.5,
      ry: 1,
      weight: 1,
      x: 1.05 + DRIFT * Math.cos(s * 0.9),
      y: 0.22 + DRIFT * Math.sin(s * 1.2),
    },
    {
      angle: -0.55 + 0.15 * Math.cos(s * 0.7),
      rx: 0.75,
      ry: 0.38,
      weight: 1,
      x: 0.86 + DRIFT * Math.sin(s * 0.8),
      y: 0.72 + DRIFT * 0.8 * Math.cos(s * 1),
    },
    {
      angle: -0.6 + 0.12 * Math.sin(s * 0.5),
      rx: 0.9,
      ry: 0.45,
      weight: 0.95,
      x: 0.12 + DRIFT * Math.sin(s * 1.1),
      y: 0.78 + DRIFT * 0.8 * Math.cos(s * 1.3),
    },
    {
      angle: -0.62 + 0.1 * Math.cos(s * 0.9),
      rx: 1.1,
      ry: 0.4,
      weight: 1,
      x: 0.28 + DRIFT * 1.2 * Math.sin(s * 0.7),
      y: 0.24 + DRIFT * Math.cos(s * 0.8),
    },
  ];
}
