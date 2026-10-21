import type { Card } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import { CARD_SIZES, CARD_VARIANTS } from 'design/components/card/spec';
import { COLUMN_SPANS, GAPS, LEVELS } from 'design/components/spec';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  variant: {
    options: CARD_VARIANTS,
    default: 'primary',
  },
  level: { options: LEVELS, default: 'neutral' },
  // Unset keeps the example's own column width.
  size: { options: [...CARD_SIZES, ...COLUMN_SPANS], default: 'default' },
  gap: { options: GAPS, default: 'normal' },
} satisfies ControlsSpec;

export type Props = Controlled<typeof Card, keyof typeof CONTROLS>;
