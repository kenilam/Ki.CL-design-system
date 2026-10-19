import type { Navigation } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import {
  ALIGN_CONTENTS,
  ALIGN_ITEMS,
  AUTO_FLOWS,
} from 'design/components/layout/spec';
import { LIST_IS } from 'design/components/list/spec';
import { GAPS } from 'design/components/spec';

/** The props the reader can toggle on the page, and the type an example takes. */
export const CONTROLS = {
  is: { options: LIST_IS, default: 'ul' },
  autoFlow: { options: AUTO_FLOWS, default: 'row' },
  gap: {
    options: GAPS,
    default: 'normal',
  },
  alignItems: { options: ALIGN_ITEMS, default: 'stretch' },
  justifyContent: { options: ALIGN_CONTENTS, default: 'stretch' },
  justifyItems: { options: ALIGN_ITEMS, default: 'stretch' },
  wrap: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof Navigation, keyof typeof CONTROLS>;
