import type { Badge } from 'design/components';
import { BADGE_VARIANTS } from 'design/components/badge/spec';
import { BUTTON_SIZES } from 'design/components/button/spec';
import { LEVELS } from 'design/components/spec';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {
  variant: { options: BADGE_VARIANTS, default: 'primary' },
  level: LEVELS,
  size: BUTTON_SIZES,
} satisfies ControlsSpec;

export type Props = Controlled<typeof Badge, keyof typeof CONTROLS>;
