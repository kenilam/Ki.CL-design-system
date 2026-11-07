import type { Sheet } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/mdx/preview';
import { CARD_VARIANTS } from 'design/components';
import { COLUMN_SPANS, LEVELS, SIDES } from 'design/components/spec';

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
  level: { options: LEVELS, default: 'neutral' },
} satisfies ControlsSpec;

export type Props = Controlled<typeof Sheet, keyof typeof CONTROLS>;
