import type { Details } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
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
  // A native details reports through `toggle`, not a callback of its own.
  open: { options: 'boolean', on: 'onToggle' },
} satisfies ControlsSpec;

export type Props = Controlled<typeof Details, keyof typeof CONTROLS>;
