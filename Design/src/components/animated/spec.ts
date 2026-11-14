import type { AnimationProps } from 'design/components';

export const ANIMATED_SPLITS = ['letter', 'word'] as const;

export type Options = Pick<
  AnimationProps,
  'delay' | 'duration' | 'easing' | 'hold' | 'in' | 'property'
> & {
  /** Milliseconds added per piece. */
  stagger?: number;
  split?: (typeof ANIMATED_SPLITS)[number];
  /** Wrap words in `**` to make them `strong`. */
  children?: number | string | false | null;
};
