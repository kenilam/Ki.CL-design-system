import type { ButtonProps } from 'design/components';
import type { ControlsSpec } from 'design/docs/mdx/preview';
import { BUTTON_SIZES } from 'design/components/button/spec';
import { LEVELS, VARIANTS } from 'design/components/spec';

const LOOK = { lookLikeHyperLink: false };

export const CONTROLS = {
  lookLikeHyperLink: 'boolean',
  variant: {
    options: VARIANTS,
    default: 'primary',
    when: LOOK,
  },
  level: { options: LEVELS, default: 'neutral', when: LOOK },
  size: { options: BUTTON_SIZES, when: LOOK },
  unstyled: { options: 'boolean', when: { lookLikeHyperLink: true } },
  disabled: 'boolean',
} as const satisfies ControlsSpec;

// Typed as the button look so an example can add look props; at runtime the
// stage may pass `lookLikeHyperLink` and `unstyled` in their place.
export type Props = Pick<
  ButtonProps & { lookLikeHyperLink?: false },
  'className' | 'disabled' | 'level' | 'lookLikeHyperLink' | 'size' | 'variant'
> & { unstyled?: false };
