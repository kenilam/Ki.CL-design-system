import type { Bubble } from 'design/components';
import { BUBBLE_VARIANTS } from 'design/components/bubble/spec';
import { LEVELS } from 'design/components/spec';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {
  variant: { options: BUBBLE_VARIANTS, default: 'primary' },
  level: LEVELS,
} satisfies ControlsSpec;

export type Props = Controlled<typeof Bubble, keyof typeof CONTROLS>;
