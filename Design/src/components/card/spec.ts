import type { ReactElement, ReactNode } from 'react';

import type { LookProps } from 'design/components/button/spec';
import type { Props as LayoutProps } from 'design/components/layout/spec';
import type { PolymorphicIsProps } from 'design/components/polymorphic';
import { VARIANTS } from 'design/components/spec';
import type { ColumnSpan, Variant } from 'design/components/spec';

/**
 * `default` = full width; `fit` = as wide as the content; named sizes map to
 * `kicl-inline-size-*`, and `1`…`12` to the column widths
 * (`kicl-inline-size-columns-*`).
 */
export const CARD_SIZES = [
  'default',
  'fit',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'max',
] as const;

export type CardSize = (typeof CARD_SIZES)[number] | ColumnSpan;

export type CardVariant = Exclude<Variant, 'ghost'>;

export const CARD_VARIANTS = VARIANTS.filter(
  (variant): variant is CardVariant => variant !== 'ghost'
);

export type { Level as CardLevel } from 'design/components/spec';

/**
 * Semantic hosts that read as a card / panel surface. `dialog` is for a card
 * that opens over the page, as `Sheet` does.
 */
export type CardIs =
  'article' | 'aside' | 'dialog' | 'form' | 'li' | 'nav' | 'search' | 'section';

/** Title hosts - headings or generic text containers. */
export type CardTitleIs =
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type CardDescriptionIs = 'p' | 'span';

export type CardSectionIs = 'footer' | 'header' | 'section';

/**
 * `level` is what the card means, as on `Button` and `Badge`: its edge takes
 * the colour, for a card that's chosen or needs attention.
 */
type CardOwnProps = {
  /** What goes in its `CardFooter`, after its other parts. */
  footer?: ReactNode;
  /** What goes in its `CardHeader`, before its other parts. */
  header?: ReactNode;
  /**
   * Width scale - `default` fills the parent; `fit` shrinks to the content;
   * `xs`…`max` apply `kicl-inline-size-*`, and `1`…`12` a column width.
   * `xs` / `sm` also tighten spacing (shadcn-style density).
   */
  size?: CardSize;
  variant?: CardVariant;
} & Pick<LookProps, 'level'> &
  Pick<
    LayoutProps,
    /** Between its parts. `narrow` for `xs` and `sm`, `normal` otherwise. */
    'gap'
  >;

export type CardProps = PolymorphicIsProps<CardIs, CardOwnProps, never>;

export type CardHeaderProps = PolymorphicIsProps<
  CardSectionIs,
  object,
  'header'
>;

export type CardTitleProps = PolymorphicIsProps<CardTitleIs, object, never>;

export type CardDescriptionProps = PolymorphicIsProps<
  CardDescriptionIs,
  object,
  'p'
>;

export type CardActionProps = {
  children: ReactElement<{ className?: string }>;
};

export type CardFooterProps = PolymorphicIsProps<
  CardSectionIs,
  object,
  'footer'
> &
  /** Where the actions sit along the footer. They fill it unless told otherwise. */
  Pick<LayoutProps, 'justifyContent'>;
