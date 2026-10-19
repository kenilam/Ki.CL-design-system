import type { Heading } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import { HEADING_LEVELS } from 'design/components/heading/spec';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  is: { options: HEADING_LEVELS, default: 'h1' },
  lookLike: HEADING_LEVELS,
  dense: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Heading, keyof typeof CONTROLS>;
