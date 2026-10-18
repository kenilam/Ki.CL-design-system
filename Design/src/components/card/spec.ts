import type { ReactNode } from 'react';

import type { LookProps } from 'design/components/button/spec';
import type {
  ColumnSpan,
  Props as LayoutProps,
} from 'design/components/layout/spec';
import type { PolymorphicIsProps } from 'design/components/polymorphic';

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

/**
 * Named as on `Button`: `primary` paints the surface with an edge, `secondary`
 * is a soft fill that lets what is behind it through, and `tertiary` is the
 * surface with no edge. There is no `ghost`: a card has an edge by default, which
 * is what `ghost` adds on `Button`.
 */
export type CardVariant = Exclude<LookProps['variant'], 'ghost' | undefined>;

export type CardLevel = NonNullable<LookProps['level']>;

/**
 * Semantic hosts that read as a card / panel surface. `dialog` is for a card
 * that opens over the page, as `Sheet` does.
 */
export type CardIs =
  'article' | 'aside' | 'dialog' | 'div' | 'form' | 'li' | 'nav' | 'section';

/** Title hosts - headings or generic text containers. */
export type CardTitleIs =
  'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type CardDescriptionIs = 'div' | 'p' | 'span';

export type CardSectionIs = 'div' | 'footer' | 'header' | 'section';

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

export type CardProps = PolymorphicIsProps<CardIs, CardOwnProps, 'div'>;

export type CardHeaderProps = PolymorphicIsProps<CardSectionIs, object, 'div'>;

export type CardTitleProps = PolymorphicIsProps<CardTitleIs, object, 'div'>;

export type CardDescriptionProps = PolymorphicIsProps<
  CardDescriptionIs,
  object,
  'p'
>;

export type CardActionProps = PolymorphicIsProps<CardSectionIs, object, 'div'>;

export type CardContentProps = PolymorphicIsProps<CardSectionIs, object, 'div'>;

export type CardFooterProps = PolymorphicIsProps<CardSectionIs, object, 'div'> &
  /** Where the actions sit along the footer. They fill it unless told otherwise. */
  Pick<LayoutProps, 'justifyContent'>;
