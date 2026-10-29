import type { Checkbox, CheckboxGroup } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {
  checked: 'boolean',
  disabled: 'boolean',
  required: 'boolean',
  'aria-invalid': 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Checkbox, keyof typeof CONTROLS>;

export const GROUP_CONTROLS = {
  'aria-invalid': null,
  checked: null,
  required: null,
};

export type GroupProps = Controlled<typeof CheckboxGroup, 'disabled'>;
