export const LEVELS = ['confirm', 'error', 'info', 'warning'] as const;

export type Level = (typeof LEVELS)[number];

export const VARIANTS = ['primary', 'secondary', 'tertiary', 'ghost'] as const;

export type Variant = (typeof VARIANTS)[number];

export const COLUMN_SPANS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

export type ColumnSpan = (typeof COLUMN_SPANS)[number];

export const GAPS = [
  'none',
  'narrowest',
  'narrower',
  'narrow',
  'normal',
  'wide',
  'wider',
  'widest',
  'extreme',
] as const;

export type Gap = (typeof GAPS)[number];

export const ALIGNS = ['start', 'center', 'end'] as const;

export type Align = (typeof ALIGNS)[number];

export const SIDES = [
  'block-end',
  'block-start',
  'inline-start',
  'inline-end',
] as const;

export type Side = (typeof SIDES)[number];
