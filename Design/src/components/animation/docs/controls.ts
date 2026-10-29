import {
  DURATIONS,
  EASINGS,
  PROPERTIES,
} from 'design/components/animation/spec';
import type { Options } from 'design/components/animation/spec';
import type { ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {
  property: { options: PROPERTIES, default: 'fade' },
  duration: { options: DURATIONS, default: 'fast' },
  easing: { options: EASINGS, default: 'ease-sharp-in-out' },
  in: { options: 'boolean', live: true },
} satisfies ControlsSpec;

// Not `Controlled`: the props' index signature would lose each key's type.
export type Props = Pick<
  Options,
  'className' | 'duration' | 'easing' | 'property'
>;
