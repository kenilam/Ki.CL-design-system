import type { AnimationProps, TextProps } from 'design/components';

export const ANIMATED_TEXT_SPLITS = ['letter', 'word'] as const;

export type Props = Omit<TextProps, 'children'> &
  Pick<AnimationProps, 'delay' | 'duration' | 'easing' | 'property'> & {
    /**
     * Milliseconds added per piece: `delay + stagger * index`.
     */
    stagger?: number;
    /**
     * Animate by letter or by word. Use `word` for sentences, where one
     * transition per letter is too many.
     */
    split?: (typeof ANIMATED_TEXT_SPLITS)[number];
    /**
     * Only strings and numbers are split into characters.
     * Falsy values and `true` render nothing.
     */
    children?:
      | Extract<TextProps['children'], string | number | null | undefined>
      | false;
  };
