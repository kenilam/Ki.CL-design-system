import type { Sheet } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import { CARD_VARIANTS } from 'design/components/card/spec';
import { COLUMN_SPANS, SIDES } from 'design/components/spec';

export const CONTROLS = {
  modal: 'boolean',
  size: { options: COLUMN_SPANS, default: 4 },
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
