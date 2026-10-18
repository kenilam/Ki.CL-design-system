import type { Sheet } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  modal: 'boolean',
  side: {
    options: ['inline-start', 'inline-end', 'block-start', 'block-end'],
    default: 'inline-end',
  },
  variant: {
    options: ['primary', 'secondary', 'tertiary'],
    default: 'primary',
  },
} satisfies ControlsSpec;

export type Props = Controlled<typeof Sheet, keyof typeof CONTROLS>;
