import type { Popover, PopoverContent } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import {
  POPOVER_PLACEMENTS,
  POPOVER_VARIANTS,
} from 'design/components/popover/spec';
import { GAPS } from 'design/components/spec';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  open: 'boolean',
  offset: {
    options: GAPS,
    default: 'narrow',
  },
  placement: {
    options: POPOVER_PLACEMENTS,
    default: 'block-end-start',
  },
  variant: {
    options: POPOVER_VARIANTS,
    default: 'primary',
  },
} satisfies ControlsSpec;

export type Props = Controlled<typeof Popover, 'open'> &
  Controlled<typeof PopoverContent, 'offset' | 'placement' | 'variant'>;
