import type { Dialog } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
// `fullScreen` is left out: the props type refuses it beside `dense`.
export const CONTROLS = {
  dense: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Dialog, keyof typeof CONTROLS>;
