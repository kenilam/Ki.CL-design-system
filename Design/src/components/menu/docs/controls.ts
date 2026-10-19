import type { Menu } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import {
  ALIGN_CONTENTS,
  ALIGN_ITEMS,
  AUTO_FLOWS,
} from 'design/components/layout/spec';
import { GAPS } from 'design/components/spec';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  autoFlow: { options: AUTO_FLOWS, default: 'column' },
  gap: {
    options: GAPS,
    default: 'normal',
  },
  alignItems: { options: ALIGN_ITEMS, default: 'stretch' },
  justifyContent: { options: ALIGN_CONTENTS, default: 'stretch' },
  justifyItems: { options: ALIGN_ITEMS, default: 'stretch' },
  wrap: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Menu, keyof typeof CONTROLS>;
