import type { Animated } from 'design/components';
import {
  ANIMATED_PROPERTIES as PROPERTIES,
  ANIMATED_SPLITS,
} from 'design/components/animated/spec';
import {
  ANIMATION_DURATIONS as DURATIONS,
  ANIMATION_EASINGS as EASINGS,
} from 'design/components';
import { LEVELS } from 'design/components/spec';
import { TEXT_LOOK_LIKES, TEXT_VARIANTS } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/mdx/preview';

export const CONTROLS = {
  split: {
    options: ANIMATED_SPLITS,
    default: 'word',
    unless: { property: 'scramble' },
  },
  property: { options: PROPERTIES, default: 'slide-from-bottom' },
  characterSet: {
    options: ['01', '#%&-+_?/='],
    when: { property: 'scramble' },
  },
  duration: { options: DURATIONS, default: 'slower' },
  easing: { options: EASINGS, default: 'ease-standard-in-out' },
  in: { options: 'boolean', live: true },
  hold: 'boolean',
  lookLike: TEXT_LOOK_LIKES,
  variant: { options: TEXT_VARIANTS, default: 'primary' },
  level: { options: LEVELS, default: 'neutral' },
  dense: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<
  typeof Animated.Text,
  Exclude<keyof typeof CONTROLS, 'characterSet'>
>;
