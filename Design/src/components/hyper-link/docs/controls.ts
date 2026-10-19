import type { Button, HyperLinkProps } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import { BUTTON_SIZES } from 'design/components/button/spec';
import { LEVELS, VARIANTS } from 'design/components/spec';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  lookLikeButton: 'boolean',
  // The button look only applies with `lookLikeButton`.
  variant: {
    default: 'primary',
    options: VARIANTS,
    when: { lookLikeButton: true },
  },
  level: {
    options: LEVELS,
    when: { lookLikeButton: true },
  },
  size: { options: BUTTON_SIZES, when: { lookLikeButton: true } },
  // Without the button look, a link can drop its own look.
  unstyled: { options: 'boolean', when: { lookLikeButton: false } },
  disabled: 'boolean',
} satisfies ControlsSpec;

/**
 * A link takes the button look only with `lookLikeButton`, so the props are
 * the same two shapes: picking the keys out of the union would let both
 * through at once.
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
 * For an example that writes `lookLikeButton` itself: the stage leaves
 * `unstyled` out while the button look is on, so it never takes it.
 */
export type ButtonLookProps = Pick<HyperLinkProps, 'className' | 'disabled'> &
  (
    | ({ lookLikeButton: true } & Controlled<
        typeof Button,
        'level' | 'size' | 'variant'
      >)
    | { lookLikeButton?: false }
  );
