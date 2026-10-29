import type { Details } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import { GAPS } from 'design/components/spec';

export const CONTROLS = {
  gap: GAPS,
  open: { options: 'boolean', on: 'onToggle' },
} satisfies ControlsSpec;

export type Props = Controlled<typeof Details, keyof typeof CONTROLS>;
