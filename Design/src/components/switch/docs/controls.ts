import type { Switch } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import { BUTTON_SIZES } from 'design/components/button/spec';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  checked: 'boolean',
  disabled: 'boolean',
  size: BUTTON_SIZES,
  required: 'boolean',
  'aria-invalid': 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Switch, keyof typeof CONTROLS>;
