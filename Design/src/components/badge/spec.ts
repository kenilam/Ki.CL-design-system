import type React from 'react';

import type { ButtonProps } from 'design/components';
import type { PolymorphicIsProps } from 'design/components/polymorphic';
import { VARIANTS } from 'design/components/spec';
import type { Variant } from 'design/components/spec';

export type BadgeVariant = Exclude<Variant, 'tertiary'>;

export const BADGE_VARIANTS = VARIANTS.filter(
  (variant): variant is BadgeVariant => {
    return variant !== 'tertiary';
  }
);

export type BadgeIs =
  'a' | 'abbr' | 'button' | 'div' | 'li' | 'mark' | 'span' | 'time';

type OwnProps = Pick<ButtonProps, 'level' | 'size'> & {
  limit?: number;
  /**
   * With `limit` and no `level`, the level follows how much is left:
   * `confirm`, `warning` from half the limit, `error` at one or none.
   */
  remaining?: number;
  variant?: BadgeVariant;
};

export type Props = PolymorphicIsProps<BadgeIs, OwnProps, 'span'>;

export type BadgeLabelProps = React.ComponentProps<'span'>;
