import type { ReactElement, ReactNode } from 'react';

import type { LookProps } from 'design/components/button/spec';
import type { Props as LayoutProps } from 'design/components/layout/spec';
import type { PolymorphicIsProps } from 'design/components/polymorphic';
import { VARIANTS } from 'design/components/spec';
import type { ColumnSpan, Variant } from 'design/components/spec';

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
  (variant): variant is CardVariant => {
    return variant !== 'ghost';
  }
);

export type { Level as CardLevel } from 'design/components/spec';

export type CardIs =
  'article' | 'aside' | 'dialog' | 'form' | 'li' | 'nav' | 'search' | 'section';

export type CardTitleIs =
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type CardDescriptionIs = 'p' | 'span';

export type CardSectionIs = 'footer' | 'header' | 'section';

type CardOwnProps = {
  footer?: ReactNode;
  header?: ReactNode;
  /**
   * `default` fills the parent and `fit` shrinks to the content. `xs` and `sm`
   * also tighten the spacing.
   */
  size?: CardSize;
  variant?: CardVariant;
} & Pick<LookProps, 'level'> &
  Pick<LayoutProps, 'gap'>;

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
  Pick<LayoutProps, 'justifyContent'>;
