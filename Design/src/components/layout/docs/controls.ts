import type { Layout } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  display: { options: ['grid', 'inline-grid', 'flex'], default: 'grid' },
  autoFlow: { options: ['row', 'column'], default: 'row' },
  gap: {
    options: [
      'none',
      'narrowest',
      'narrower',
      'narrow',
      'normal',
      'wide',
      'wider',
      'widest',
      'extreme',
    ],
    default: 'normal',
  },
  alignItems: ['baseline', 'center', 'end', 'start', 'stretch'],
  justifyContent: [
    'center',
    'end',
    'start',
    'stretch',
    'space-around',
    'space-between',
    'space-evenly',
  ],
  justifyItems: ['center', 'end', 'start', 'stretch'],
  wrap: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Layout, keyof typeof CONTROLS>;
