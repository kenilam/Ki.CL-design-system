import type { PolymorphicIsProps } from 'design/components/polymorphic';

export const BUBBLE_VARIANTS = [
  'default',
  'secondary',
  'muted',
  'tinted',
  'outline',
  'ghost',
  'destructive',
] as const;

export type BubbleVariant = (typeof BUBBLE_VARIANTS)[number];

/** Semantic hosts for one message. */
export type BubbleIs = 'article' | 'div' | 'li' | 'section';

/** The text surface; `a` and `button` make the whole bubble a control. */
export type BubbleContentIs =
  'a' | 'blockquote' | 'button' | 'div' | 'p' | 'span';

/** Consecutive messages from one sender. */
export type BubbleGroupIs = 'div' | 'li' | 'ol' | 'section' | 'ul';

export type BubbleReactionsIs = 'div' | 'ul';

export type BubbleProps = PolymorphicIsProps<
  BubbleIs,
  {
    /** Visual style - mirrors [shadcn Bubble](https://ui.shadcn.com/docs/components/base/bubble). */
    variant?: BubbleVariant;
  },
  'div'
>;

export type BubbleContentProps = PolymorphicIsProps<
  BubbleContentIs,
  object,
  'div'
>;

export type BubbleGroupProps = PolymorphicIsProps<BubbleGroupIs, object, 'div'>;

export type BubbleReactionsProps = PolymorphicIsProps<
  BubbleReactionsIs,
  object,
  'div'
>;
