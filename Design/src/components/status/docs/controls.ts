import type { StatusProps } from 'design/components';
import type { ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  level: ['error', 'info', 'warning'],
  justifyContent: { options: ['start', 'center', 'end'], default: 'start' },
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
    default: 'slide-from-bottom',
  },
} as const satisfies ControlsSpec;

/** A message alone has no heading, so only a preset with a title takes its level. */
export const TITLE_CONTROLS = {
  headingLevel: {
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    default: 'h4',
  },
} as const satisfies ControlsSpec;

// Not `Controlled`: through the component type, the animation props' index
// signature loses each key's type. A `Pick` of the props keeps them.
export type Props = Pick<
  StatusProps,
  'className' | keyof typeof CONTROLS | keyof typeof TITLE_CONTROLS
>;
