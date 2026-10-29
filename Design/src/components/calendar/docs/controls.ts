import type { Calendar } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

export const CONTROLS = {} satisfies ControlsSpec;

export type Props = Controlled<typeof Calendar, keyof typeof CONTROLS>;
