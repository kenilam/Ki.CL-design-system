import type { Heading } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import { HEADING_LEVELS } from 'design/components/heading/spec';
import { LEVELS } from 'design/components/spec';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  is: { options: HEADING_LEVELS, default: 'h1' },
  level: { options: LEVELS, default: 'neutral' },
  lookLike: { options: HEADING_LEVELS, except: 'is' },
  dense: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Heading, 'dense' | 'level'> & {
  is?: never;
  lookLike?: never;
};
