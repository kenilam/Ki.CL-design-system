import type { Checkbox, CheckboxGroup } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  checked: 'boolean',
  disabled: 'boolean',
  required: 'boolean',
  'aria-invalid': 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Checkbox, keyof typeof CONTROLS>;

/** A group has no `checked` of its own; `disabled` turns off every box in it. */
export const GROUP_CONTROLS = {
  'aria-invalid': null,
  checked: null,
  required: null,
};

export type GroupProps = Controlled<typeof CheckboxGroup, 'disabled'>;
