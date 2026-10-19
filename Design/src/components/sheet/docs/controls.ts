import type { Sheet } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import { CARD_VARIANTS } from 'design/components/card/spec';
import { SIDES } from 'design/components/spec';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  modal: 'boolean',
  side: {
    options: SIDES,
    default: 'inline-end',
  },
  variant: {
    options: CARD_VARIANTS,
    default: 'primary',
  },
} satisfies ControlsSpec;

export type Props = Controlled<typeof Sheet, keyof typeof CONTROLS>;
