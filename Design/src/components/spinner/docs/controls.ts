import type { Duration, Property } from 'design/components/animation/spec';
import type { SpinnerProps } from 'design/components';
import type { ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  size: ['small', 'large'],
  property: {
    options: [
      'blur',
      'fade',
      'slide-from-bottom',
      'slide-from-left',
      'slide-from-right',
      'slide-from-top',
      'zoom-in',
      'zoom-out',
    ],
    default: 'zoom-out',
  },
  duration: {
    options: [
      'instant',
      'fastest',
      'faster',
      'fast',
      'slow',
      'slower',
      'slowest',
      'extreme',
    ],
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
