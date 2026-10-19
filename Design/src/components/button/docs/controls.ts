import type { ButtonProps } from 'design/components';
import type { ControlsSpec } from 'design/docs/mdx/preview';
import { BUTTON_SIZES } from 'design/components/button/spec';
import { LEVELS, VARIANTS } from 'design/components/spec';

/** The look props only apply without `lookLikeHyperLink`. */
const LOOK = { lookLikeHyperLink: false };

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  lookLikeHyperLink: 'boolean',
  variant: {
    options: VARIANTS,
    default: 'primary',
    when: LOOK,
  },
  level: { options: LEVELS, when: LOOK },
  size: { options: BUTTON_SIZES, when: LOOK },
  // With the link's look, it can drop that look too, as a link can.
  unstyled: { options: 'boolean', when: { lookLikeHyperLink: true } },
  disabled: 'boolean',
} as const satisfies ControlsSpec;

/*
 * The button look's props. The stage also passes `lookLikeHyperLink`, with
 * `unstyled`, and leaves the look props out when it does, so an example
 * that writes one of them still makes a valid button.
 */
export type Props = Pick<
  ButtonProps & { lookLikeHyperLink?: false },
  'className' | 'disabled' | 'level' | 'lookLikeHyperLink' | 'size' | 'variant'
> & { unstyled?: false };
