import type { ColorPicker } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/mdx/preview';
import { COLOR_PICKER_PRESENTATIONS } from 'design/components';

export const CONTROLS = {
  presentation: {
    options: COLOR_PICKER_PRESENTATIONS,
    default: 'popover',
  },
  copyable: {
    options: 'boolean',
    unless: { presentation: 'widget' },
  },
  disabled: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof ColorPicker, keyof typeof CONTROLS>;
