import type { Combobox } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {
  open: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Combobox, keyof typeof CONTROLS>;
