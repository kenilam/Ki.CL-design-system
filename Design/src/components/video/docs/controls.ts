import type { Video } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {
  controls: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Video, keyof typeof CONTROLS>;
