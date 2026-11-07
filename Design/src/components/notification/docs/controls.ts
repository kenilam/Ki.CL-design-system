import type { Notification, NotificationGroup } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/mdx/preview';
import { CARD_VARIANTS } from 'design/components';
import { LEVELS, SIDES } from 'design/components/spec';

export const CONTROLS = {
  side: {
    options: SIDES,
    default: 'inline-end',
  },
  variant: {
    options: CARD_VARIANTS,
    default: 'primary',
  },
  level: { options: LEVELS, default: 'neutral' },
} satisfies ControlsSpec;

export type Props = Controlled<typeof NotificationGroup, 'side'> &
  Controlled<typeof Notification, 'level' | 'variant'>;
