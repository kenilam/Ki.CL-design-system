import type { Dialog } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/mdx/preview';
import { COLUMN_SPANS } from 'design/components/spec';

// No `fullScreen` control: the props type doesn't allow it with `dense`.
export const CONTROLS = {
  dense: 'boolean',
  size: { options: COLUMN_SPANS, default: 6 },
} satisfies ControlsSpec;

export type Props = Controlled<typeof Dialog, keyof typeof CONTROLS>;
