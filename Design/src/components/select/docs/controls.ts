import type { Select } from 'design/components';
import { POPOVER_PLACEMENTS } from 'design/components/popover/spec';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {
  disabled: 'boolean',
  inline: 'boolean',
  placement: POPOVER_PLACEMENTS,
  required: 'boolean',
  'aria-busy': 'boolean',
  'aria-invalid': 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Select, keyof typeof CONTROLS>;
