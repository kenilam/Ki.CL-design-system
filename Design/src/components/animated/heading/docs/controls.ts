import type { Animated } from 'design/components';
import {
  ANIMATION_DURATIONS as DURATIONS,
  ANIMATION_EASINGS as EASINGS,
} from 'design/components';
import {
  ANIMATED_PROPERTIES as PROPERTIES,
  ANIMATED_SPLITS,
} from 'design/components/animated/spec';
import { HEADING_LEVELS, HEADING_LOOKS } from 'design/components/heading/spec';
import { LEVELS } from 'design/components/spec';
import type { Controlled, ControlsSpec } from 'design/mdx/preview';

export const CONTROLS = {
  is: { options: HEADING_LEVELS, default: 'h1' },
  lookLike: { options: HEADING_LOOKS, except: 'is' },
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
  level: { options: LEVELS, default: 'neutral' },
  dense: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<
  typeof Animated.Heading,
  | 'dense'
  | 'duration'
  | 'easing'
  | 'hold'
  | 'in'
  | 'level'
  | 'property'
  | 'split'
> & { is?: never; lookLike?: never };
