import type { Duration, Property } from 'design/components/animation/spec';
import type { SpinnerProps } from 'design/components';
import type { ControlsSpec } from 'design/docs/mdx/preview';
import { DURATIONS, PROPERTIES } from 'design/components/animation/spec';
import { BUTTON_SIZES } from 'design/components/button/spec';

/** The props the reader can toggle on the page, and the type an example takes. */
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

/** Only an overlay has a veil to stagger, so only that preset shows `in`. */
export const OVERLAY_CONTROLS = {
  in: { options: 'boolean', live: true },
} as const satisfies ControlsSpec;

/*
 * Written out, not `Controlled`: the animation props carry an index
 * signature, so a `Pick` of them loses each key's type.
 */
export type Props = Pick<SpinnerProps, 'size'> & {
  className?: string;
  duration?: Duration;
  in?: boolean;
  property?: Property;
};
