import {
  DURATIONS,
  EASINGS,
  PROPERTIES,
} from 'design/components/animation/spec';
import type { Options } from 'design/components/animation/spec';
import type { ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  property: { options: PROPERTIES, default: 'fade' },
  duration: { options: DURATIONS, default: 'fast' },
  easing: { options: EASINGS, default: 'ease-sharp-in-out' },
  in: { options: 'boolean', live: true },
} satisfies ControlsSpec;

/*
 * From `Options`, not `Controlled`: the component's props carry an index
 * signature, so a `Pick` of them loses each key's type.
 */
export type Props = Pick<
  Options,
  'className' | 'duration' | 'easing' | 'property'
>;
