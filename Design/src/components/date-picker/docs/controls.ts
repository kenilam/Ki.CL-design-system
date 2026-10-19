import type { DatePicker } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import { POPOVER_VARIANTS } from 'design/components/popover/spec';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  disabled: 'boolean',
  variant: {
    options: POPOVER_VARIANTS,
    default: 'primary',
  },
} satisfies ControlsSpec;

export type Props = Controlled<typeof DatePicker, keyof typeof CONTROLS>;
