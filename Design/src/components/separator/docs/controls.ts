import type { Separator } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  orientation: { options: ['horizontal', 'vertical'], default: 'horizontal' },
} satisfies ControlsSpec;

export type Props = Controlled<typeof Separator, keyof typeof CONTROLS>;
