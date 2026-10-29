import type { Segmented } from 'design/components';
import {
  POPOVER_PLACEMENTS,
  POPOVER_VARIANTS,
} from 'design/components/popover/spec';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  disabled: 'boolean',
} satisfies ControlsSpec;

export const POPOVER_CONTROLS = {
  placement: POPOVER_PLACEMENTS,
  variant: { options: POPOVER_VARIANTS, default: 'primary' },
} satisfies ControlsSpec;

export type Props = Controlled<typeof Segmented, keyof typeof CONTROLS>;

export type PopoverProps = Controlled<
  typeof Segmented,
  keyof typeof CONTROLS | keyof typeof POPOVER_CONTROLS
>;
