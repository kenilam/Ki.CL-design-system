import type { StatusProps } from 'design/components';
import type { ControlsSpec } from 'design/docs/mdx/preview';
import { PROPERTIES } from 'design/components/animation/spec';
import { HEADING_LEVELS } from 'design/components/heading/spec';
import { ALIGNS } from 'design/components/spec';
import { STATUS_LEVELS } from 'design/components/status/spec';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  level: STATUS_LEVELS,
  justifyContent: { options: ALIGNS, default: 'start' },
  property: {
    options: PROPERTIES,
    default: 'slide-from-bottom',
  },
} as const satisfies ControlsSpec;

/** A message alone has no heading, so only a preset with a title takes its level. */
export const TITLE_CONTROLS = {
  headingLevel: {
    options: HEADING_LEVELS,
    default: 'h4',
  },
} as const satisfies ControlsSpec;

// Not `Controlled`: through the component type, the animation props' index
// signature loses each key's type. A `Pick` of the props keeps them.
export type Props = Pick<
  StatusProps,
  'className' | keyof typeof CONTROLS | keyof typeof TITLE_CONTROLS
>;
