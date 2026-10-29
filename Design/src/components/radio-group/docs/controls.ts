import type { RadioGroup } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {
  disabled: 'boolean',
  required: 'boolean',
  'aria-invalid': 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof RadioGroup, keyof typeof CONTROLS>;
