import type { Image } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {
  loading: { options: ['lazy', 'eager'], default: 'lazy' },
} satisfies ControlsSpec;

export type Props = Controlled<typeof Image, keyof typeof CONTROLS>;
