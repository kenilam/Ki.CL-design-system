import type { Options } from 'design/components/animation/spec';
import type { ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  property: [
    'blur',
    'fade',
    'slide-from-bottom',
    'slide-from-left',
    'slide-from-right',
    'slide-from-top',
    'zoom-in',
    'zoom-out',
  ],
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
  easing: {
    options: [
      'ease-in',
      'ease-out',
      'ease-back-in',
      'ease-back-out',
      'ease-back-in-out',
      'ease-circ-in',
      'ease-circ-out',
      'ease-circ-in-out',
      'ease-cubic-in',
      'ease-cubic-out',
      'ease-cubic-in-out',
      'ease-expo-in',
      'ease-expo-out',
      'ease-expo-in-out',
      'ease-quad-in',
      'ease-quad-out',
      'ease-quad-in-out',
      'ease-quart-in',
      'ease-quart-out',
      'ease-quart-in-out',
      'ease-quint-in',
      'ease-quint-out',
      'ease-quint-in-out',
      'ease-sharp-in-out',
      'ease-sine-in',
      'ease-sine-out',
      'ease-sine-in-out',
    ],
    default: 'ease-sharp-in-out',
  },
} satisfies ControlsSpec;

/*
 * From `Options`, not `Controlled`: the component's props carry an index
 * signature, so a `Pick` of them loses each key's type.
 */
export type Props = Pick<
  Options,
  'className' | 'duration' | 'easing' | 'property'
>;
