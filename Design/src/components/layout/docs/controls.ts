import type { Layout } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import {
  ALIGN_CONTENTS,
  ALIGN_ITEMS,
  AUTO_FLOWS,
  FRAMES,
} from 'design/components/layout/spec';
import { COLUMN_SPANS, GAPS } from 'design/components/spec';

const GAP = { options: GAPS, default: 'normal' } satisfies ControlsSpec[string];

export const STACK_CONTROLS = {
  gap: GAP,
  justifyItems: ALIGN_ITEMS,
} satisfies ControlsSpec;

export const ROW_CONTROLS = {
  autoFlow: { options: AUTO_FLOWS, default: 'row' },
  gap: GAP,
  justifyContent: ALIGN_CONTENTS,
} satisfies ControlsSpec;

export const FRAMES_CONTROLS = {
  frames: FRAMES,
  gap: GAP,
  alignItems: ALIGN_ITEMS,
} satisfies ControlsSpec;

export const COLUMNS_CONTROLS = {
  span: [...COLUMN_SPANS, 'full'],
} satisfies ControlsSpec;

export const FILL_CONTROLS = {
  fill: COLUMN_SPANS,
  gap: GAP,
} satisfies ControlsSpec;

export const WRAP_CONTROLS = {
  wrap: 'boolean',
  gap: GAP,
  justifyContent: ALIGN_CONTENTS,
} satisfies ControlsSpec;

export type StackProps = Controlled<typeof Layout, keyof typeof STACK_CONTROLS>;

export type RowProps = Controlled<typeof Layout, keyof typeof ROW_CONTROLS>;

export type FramesProps = Controlled<
  typeof Layout,
  keyof typeof FRAMES_CONTROLS
>;

export type ColumnsProps = Controlled<
  typeof Layout,
  keyof typeof COLUMNS_CONTROLS
>;

export type FillProps = Controlled<typeof Layout, keyof typeof FILL_CONTROLS>;

export type WrapProps = Controlled<typeof Layout, keyof typeof WRAP_CONTROLS>;
