import type React from 'react';

import type { Props as ButtonProps } from 'design/components/button/spec';
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
  variant?: BadgeVariant;
};

export type Props = PolymorphicIsProps<BadgeIs, OwnProps, 'span'>;

export type BadgeLabelProps = React.ComponentProps<'span'>;
