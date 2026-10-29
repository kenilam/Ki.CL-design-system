import type React from 'react';

export type Props = React.ComponentPropsWithoutRef<'canvas'>;

/** Packed `0xRRGGBB` numbers, not CSS strings. */
export type Palette = {
  inks: number[];
  paper: number;
};

/**
 * `x` and `y` are fractions of the canvas width and height. `rx` and `ry` are
 * fractions of its height alone, so a pool keeps its shape on wide screens.
 */
export type Pool = {
  angle: number;
  rx: number;
  ry: number;
  weight: number;
  x: number;
  y: number;
};

export type Renderer = {
  dispose(): void;
  draw(seconds: number, palette: Palette, cell: number, levels: number): void;
  resize(width: number, height: number): void;
};
