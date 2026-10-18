import type { Image } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  loading: { options: ['lazy', 'eager'], default: 'lazy' },
} satisfies ControlsSpec;

export type Props = Controlled<typeof Image, keyof typeof CONTROLS>;
