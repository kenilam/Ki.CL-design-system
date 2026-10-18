import type { Sheet } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  variant: ['primary', 'secondary', 'tertiary'],
} satisfies ControlsSpec;

export type Props = Controlled<typeof Sheet, keyof typeof CONTROLS>;
