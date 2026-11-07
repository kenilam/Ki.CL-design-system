import type { InputGroupInput } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/mdx/preview';

export const CONTROLS = {
  disabled: 'boolean',
  'aria-invalid': 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof InputGroupInput, keyof typeof CONTROLS>;
