import type { PolymorphicIsProps } from 'design/components/polymorphic';
import { VARIANTS } from 'design/components/spec';
import type { Level, Variant } from 'design/components/spec';

export const BUBBLE_VARIANTS = VARIANTS;

export type BubbleVariant = Variant;

export type { Level as BubbleLevel } from 'design/components/spec';

/** Semantic hosts for one message. */
export type BubbleIs = 'article' | 'li' | 'section';

/** The text surface; `a` and `button` make the whole bubble a control. */
export type BubbleContentIs = 'a' | 'blockquote' | 'button' | 'p' | 'span';

/** Consecutive messages from one sender. */
export type BubbleGroupIs = 'li' | 'ol' | 'section' | 'ul';

export type BubbleReactionsIs = 'ul';

export type BubbleProps = PolymorphicIsProps<
  BubbleIs,
  {
    level?: Level;
    variant?: BubbleVariant;
  },
  'article'
>;

export type BubbleContentProps = PolymorphicIsProps<
  BubbleContentIs,
  object,
  'p'
>;

export type BubbleGroupProps = PolymorphicIsProps<BubbleGroupIs, object, 'ol'>;

export type BubbleReactionsProps = PolymorphicIsProps<
  BubbleReactionsIs,
  object,
  'ul'
>;
