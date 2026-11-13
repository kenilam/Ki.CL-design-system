import type { AnimatedText } from 'design/components';
import { ANIMATED_TEXT_SPLITS } from 'design/components/animated-text/spec';
import {
  ANIMATION_DURATIONS as DURATIONS,
  ANIMATION_EASINGS as EASINGS,
  ANIMATION_PROPERTIES as PROPERTIES,
} from 'design/components';
import { LEVELS } from 'design/components/spec';
import { TEXT_LOOK_LIKES, TEXT_VARIANTS } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/mdx/preview';

export const CONTROLS = {
  split: { options: ANIMATED_TEXT_SPLITS, default: 'word' },
  property: { options: PROPERTIES, default: 'slide-from-bottom' },
  duration: { options: DURATIONS, default: 'slower' },
  easing: { options: EASINGS, default: 'ease-standard-in-out' },
  lookLike: TEXT_LOOK_LIKES,
  variant: { options: TEXT_VARIANTS, default: 'primary' },
  level: { options: LEVELS, default: 'neutral' },
  dense: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof AnimatedText, keyof typeof CONTROLS>;
