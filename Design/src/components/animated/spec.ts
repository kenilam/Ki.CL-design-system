import type { AnimationProps } from 'design/components';

import { PROPERTIES } from 'design/components/animation/spec';

export const ANIMATED_SPLITS = ['letter', 'word'] as const;

export const ANIMATED_PROPERTIES = [...PROPERTIES, 'scramble'] as const;

type Split = (typeof ANIMATED_SPLITS)[number];

type Motion =
  | {
      property?: AnimationProps['property'];
      split?: Split;
      characterSet?: never;
    }
  | {
      property: 'scramble';
      split?: never;
      /** The characters a letter shuffles through before it settles. */
      characterSet?: string;
    };

export type Options = Pick<
  AnimationProps,
  'delay' | 'duration' | 'easing' | 'hold' | 'in'
> &
  Motion & {
    /** Milliseconds added per piece. */
    stagger?: number;
    /**
     * Wrap words in `**` to make them `strong`, or write `[label](url)` to make
     * them a link.
     */
    children?: number | string | false | null;
  };
