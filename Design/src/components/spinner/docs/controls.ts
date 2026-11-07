import type {
  AnimationDuration as Duration,
  AnimationProperty as Property,
} from 'design/components';
import type { SpinnerProps } from 'design/components';
import type { ControlsSpec } from 'design/mdx/preview';
import {
  ANIMATION_DURATIONS as DURATIONS,
  ANIMATION_PROPERTIES as PROPERTIES,
} from 'design/components';
import { BUTTON_SIZES } from 'design/components';

export const CONTROLS = {
  size: BUTTON_SIZES,
  property: {
    options: PROPERTIES,
    default: 'zoom-out',
  },
  duration: {
    options: DURATIONS,
    default: 'fast',
  },
} as const satisfies ControlsSpec;

export const OVERLAY_CONTROLS = {
  in: { options: 'boolean', live: true },
} as const satisfies ControlsSpec;

/*
 * Written out because the animation props carry an index signature, and a
 * `Pick` of them loses each key's type.
 */
export type Props = Pick<SpinnerProps, 'size'> & {
  className?: string;
  duration?: Duration;
  in?: boolean;
  property?: Property;
};
