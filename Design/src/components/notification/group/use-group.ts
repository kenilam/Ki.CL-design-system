import { useId, useRef } from 'react';

// Hooks
import { useOverlayContents } from 'design/hooks';

// Spec
import type { NotificationGroupProps } from 'design/components/notification/spec';

// Partials
import { useToggle } from './use-toggle';

type Options = Pick<
  NotificationGroupProps,
  'closable' | 'defaultOpen' | 'id' | 'onOpenChange'
>;

const useGroup = ({ closable, defaultOpen, id, onOpenChange }: Options) => {
  const generated = useId();
  const node = useRef<HTMLElement | null>(null);
  const shown = useOverlayContents(node, defaultOpen);

  useToggle(node, { closable, defaultOpen, onOpenChange });

  return { id: id ?? generated, node, shown };
};

export { useGroup };
