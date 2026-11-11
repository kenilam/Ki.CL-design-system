import React from 'react';

// Hooks
import { useOverlayContents } from 'design/hooks';

// Context
import { usePopoverOpen } from 'design/components/popover/context';

// Partials
import { useDismiss } from './use-dismiss';
import { useSyncOpen } from './use-sync-open';

const useContent = (nodeRef: React.RefObject<HTMLElement | null>) => {
  const { open } = usePopoverOpen();
  const shown = useOverlayContents(nodeRef, open);

  useSyncOpen(nodeRef);
  useDismiss(nodeRef);

  return shown;
};

export { useContent };
