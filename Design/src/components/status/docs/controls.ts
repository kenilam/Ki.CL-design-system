import type { StatusProps } from 'design/components';
import type { ControlsSpec } from 'design/mdx/preview';
import { ANIMATION_PROPERTIES as PROPERTIES } from 'design/components';
import { HEADING_LEVELS } from 'design/components';
import { ALIGNS } from 'design/components/spec';
import { STATUS_LEVELS } from 'design/components/status/spec';

export const CONTROLS = {
  level: STATUS_LEVELS,
  justifyContent: { options: ALIGNS, default: 'start' },
  property: {
    options: PROPERTIES,
    default: 'slide-from-bottom',
  },
  in: { options: 'boolean', live: true },
} as const satisfies ControlsSpec;

export const TITLE_CONTROLS = {
  headingLevel: {
    options: HEADING_LEVELS,
    default: 'h4',
  },
} as const satisfies ControlsSpec;

// `Controlled` loses the animation props' key types to their index signature;
// a `Pick` of the props keeps them.
export type Props = Pick<
  StatusProps,
  'className' | keyof typeof CONTROLS | keyof typeof TITLE_CONTROLS
>;
