import type { PolymorphicIsProps } from 'design/components/polymorphic';
import { VARIANTS } from 'design/components/spec';
import type { Level, Variant } from 'design/components/spec';

export const BUBBLE_VARIANTS = VARIANTS;

export type BubbleVariant = Variant;

export type { Level as BubbleLevel } from 'design/components/spec';

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
    level?: Level;
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
