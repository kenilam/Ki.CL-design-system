import type { Input } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  disabled: 'boolean',
  // A read-only field shows its look only with something in it.
  readOnly: { options: 'boolean', with: { defaultValue: 'John Smith' } },
  required: 'boolean',
  'aria-invalid': 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Input, keyof typeof CONTROLS>;
