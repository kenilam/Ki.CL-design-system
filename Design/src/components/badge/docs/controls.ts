import type { Badge } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  variant: {
    options: ['default', 'secondary', 'outline'],
    default: 'default',
  },
  level: ['confirm', 'error', 'info', 'warning'],
  size: ['small', 'large'],
} satisfies ControlsSpec;

export type Props = Controlled<typeof Badge, keyof typeof CONTROLS>;
