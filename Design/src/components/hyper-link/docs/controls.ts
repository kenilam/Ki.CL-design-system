import type { Button, HyperLinkProps } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import { BUTTON_SIZES } from 'design/components/button/spec';
import { LEVELS, VARIANTS } from 'design/components/spec';

export const CONTROLS = {
  lookLikeButton: 'boolean',
  variant: {
    default: 'primary',
    options: VARIANTS,
    when: { lookLikeButton: true },
  },
  level: {
    default: 'neutral',
    options: LEVELS,
    when: { lookLikeButton: true },
  },
  size: { options: BUTTON_SIZES, when: { lookLikeButton: true } },
  unstyled: { options: 'boolean', when: { lookLikeButton: false } },
  disabled: 'boolean',
} satisfies ControlsSpec;

/**
 * Repeats the link's two shapes, because picking keys out of its union would
 * let both through at once.
 */
export type Props = Pick<HyperLinkProps, 'className' | 'disabled'> &
  (
    | ({ lookLikeButton: true } & Controlled<
        typeof Button,
        'level' | 'size' | 'variant'
      >)
    | ({ lookLikeButton?: false } & Pick<HyperLinkProps, 'unstyled'>)
  );

/**
 * For an example that sets `lookLikeButton` itself. The stage drops
 * `unstyled` while the button look is on.
 */
export type ButtonLookProps = Pick<HyperLinkProps, 'className' | 'disabled'> &
  (
    | ({ lookLikeButton: true } & Controlled<
        typeof Button,
        'level' | 'size' | 'variant'
      >)
    | { lookLikeButton?: false }
  );
