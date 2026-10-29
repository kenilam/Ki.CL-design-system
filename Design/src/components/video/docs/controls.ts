import type { Video } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {
  autoPlay: 'boolean',
  controls: 'boolean',
  loop: 'boolean',
  muted: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Video, keyof typeof CONTROLS>;
