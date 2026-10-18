import type { Bubble } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  variant: {
    options: [
      'default',
      'secondary',
      'muted',
      'tinted',
      'outline',
      'ghost',
      'destructive',
    ],
    default: 'default',
  },
} satisfies ControlsSpec;

export type Props = Controlled<typeof Bubble, keyof typeof CONTROLS>;
