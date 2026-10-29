import type { Textarea } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {
  disabled: 'boolean',
  // A read-only field shows its look only with something in it.
  readOnly: {
    options: 'boolean',
    with: {
      defaultValue:
        'Thanks for the invite. I can make Tuesday or Thursday afternoon.',
    },
  },
  required: 'boolean',
  'aria-invalid': 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Textarea, keyof typeof CONTROLS>;
