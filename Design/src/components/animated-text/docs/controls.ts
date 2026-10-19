import type { AnimatedText } from 'design/components';
import { ANIMATED_TEXT_SPLITS } from 'design/components/animated-text/spec';
import { DURATIONS, PROPERTIES } from 'design/components/animation/spec';
import { LEVELS } from 'design/components/spec';
import { TEXT_LOOK_LIKES, TEXT_VARIANTS } from 'design/components/text/spec';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  split: { options: ANIMATED_TEXT_SPLITS, default: 'letter' },
  property: { options: PROPERTIES, default: 'slide-from-top' },
  duration: { options: DURATIONS, default: 'fastest' },
  lookLike: TEXT_LOOK_LIKES,
  variant: TEXT_VARIANTS,
  level: LEVELS,
  dense: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof AnimatedText, keyof typeof CONTROLS>;
