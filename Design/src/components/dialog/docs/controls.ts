import type { Dialog } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

// No `fullScreen` control: the props type doesn't allow it with `dense`.
export const CONTROLS = {
  dense: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Dialog, keyof typeof CONTROLS>;
