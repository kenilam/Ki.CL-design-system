import type { Heading } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  is: { options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], default: 'h1' },
  lookLike: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  dense: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Heading, keyof typeof CONTROLS>;
