import type { Card } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  variant: {
    options: ['primary', 'secondary', 'tertiary'],
    default: 'primary',
  },
  level: ['confirm', 'error', 'info', 'warning'],
  // Unset keeps the example's own column width.
  size: ['fit', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'max'],
  gap: [
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
} satisfies ControlsSpec;

export type Props = Controlled<typeof Card, keyof typeof CONTROLS>;
