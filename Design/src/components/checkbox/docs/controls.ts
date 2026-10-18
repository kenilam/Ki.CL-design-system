import type { Checkbox } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  checked: 'boolean',
  disabled: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Checkbox, keyof typeof CONTROLS>;
