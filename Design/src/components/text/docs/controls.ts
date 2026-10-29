import { LEVELS } from 'design/components/spec';
import {
  TEXT_IS,
  TEXT_LOOK_LIKES,
  TEXT_VARIANTS,
} from 'design/components/text/spec';
import type { TextLevel } from 'design/components/text/spec';
import type { ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {
  is: { options: TEXT_IS, default: 'p' },
  variant: { options: TEXT_VARIANTS, default: 'primary' },
  level: { options: LEVELS, default: 'neutral' },
  lookLike: { options: TEXT_LOOK_LIKES, except: 'is' },
  dense: 'boolean',
  unstyled: 'boolean',
} as const satisfies ControlsSpec;

export type Props = {
  className?: string;
  dense?: boolean;
  is?: never;
  level?: TextLevel;
  lookLike?: never;
  variant?: (typeof TEXT_VARIANTS)[number];
};
