import type { Frame } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {
  animate: 'boolean',
  clip: 'boolean',
  grow: 'boolean',
  delay: { options: [0, 300, 600], default: 0 },
} satisfies ControlsSpec;

export type Props = Controlled<typeof Frame, keyof typeof CONTROLS>;
