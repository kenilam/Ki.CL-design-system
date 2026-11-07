import type { Navigation } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/mdx/preview';
import {
  LAYOUT_ALIGN_CONTENTS as ALIGN_CONTENTS,
  LAYOUT_ALIGN_ITEMS as ALIGN_ITEMS,
  LAYOUT_AUTO_FLOWS as AUTO_FLOWS,
} from 'design/components';
import { LIST_IS } from 'design/components';
import { GAPS } from 'design/components/spec';

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
