import type React from 'react';

import type { Props as ButtonProps } from 'design/components/button/spec';
import type { PolymorphicIsProps } from 'design/components/polymorphic';

export const BADGE_VARIANTS = ['default', 'secondary', 'outline'] as const;

export type BadgeVariant = (typeof BADGE_VARIANTS)[number];

/** Semantic hosts that read as a badge / chip / tag. */
export type BadgeIs =
  'a' | 'abbr' | 'button' | 'div' | 'li' | 'mark' | 'span' | 'time';

/**
 * `level` is what it means, as on `Button`: fills the chip with that colour,
 * or edges an `outline`. It stands in for shadcn's `destructive` variant.
 */
type OwnProps = Pick<ButtonProps, 'level' | 'size'> & {
  /** How it looks, with shadcn's names: filled, a quieter fill, or an outline. */
  variant?: BadgeVariant;
};

export type Props = PolymorphicIsProps<BadgeIs, OwnProps, 'span'>;

export type BadgeLabelProps = React.ComponentProps<'span'>;
