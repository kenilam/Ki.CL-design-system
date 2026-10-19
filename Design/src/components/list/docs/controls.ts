import type { List } from 'design/components';
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
  alignItems: ALIGN_ITEMS,
  justifyContent: ALIGN_CONTENTS,
  wrap: 'boolean',
} satisfies ControlsSpec;

export type Props = Controlled<typeof List, keyof typeof CONTROLS>;
