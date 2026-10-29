import type { AnimationProps, TextProps } from 'design/components';

export const ANIMATED_TEXT_SPLITS = ['letter', 'word'] as const;

export type Props = Omit<TextProps, 'children'> &
  Pick<AnimationProps, 'delay' | 'duration' | 'easing' | 'property'> & {
    /** Milliseconds added per piece. */
    stagger?: number;
    split?: (typeof ANIMATED_TEXT_SPLITS)[number];
    children?:
      | Extract<TextProps['children'], string | number | null | undefined>
      | false;
  };
