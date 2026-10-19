import { LEVELS } from 'design/components/spec';
import { TEXT_LOOK_LIKES, TEXT_VARIANTS } from 'design/components/text/spec';
import type { TextLevel, TextLookLike } from 'design/components/text/spec';
import type { ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {
  variant: { options: TEXT_VARIANTS, default: 'primary' },
  level: LEVELS,
  lookLike: TEXT_LOOK_LIKES,
  dense: 'boolean',
} as const satisfies ControlsSpec;

/*
 * Written out, not `Controlled`: the props are a union on `is` and on
 * `unstyled`, so a `Pick` of them fits none of its branches. `is` has no
 * control, since a preset's element is part of what it shows.
 */
export type Props = {
  className?: string;
  dense?: boolean;
  level?: TextLevel;
  lookLike?: TextLookLike;
  variant?: (typeof TEXT_VARIANTS)[number];
};
