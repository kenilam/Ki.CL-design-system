import type { Switch } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/mdx/preview';
import { BUTTON_SIZES } from 'design/components';

export const CONTROLS = {
  checked: 'boolean',
  disabled: 'boolean',
  size: BUTTON_SIZES,
} satisfies ControlsSpec;

export type Props = Controlled<typeof Switch, keyof typeof CONTROLS>;
