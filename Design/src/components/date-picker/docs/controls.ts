import type { DatePicker } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import { POPOVER_VARIANTS } from 'design/components/popover/spec';

export const CONTROLS = {
  disabled: 'boolean',
  variant: {
    options: POPOVER_VARIANTS,
    default: 'primary',
  },
  required: 'boolean',
  'aria-invalid': 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof DatePicker, keyof typeof CONTROLS>;
