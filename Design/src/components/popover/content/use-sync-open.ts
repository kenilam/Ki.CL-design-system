import React, { useEffect } from 'react';

// Context
import {
  usePopoverOpen,
  usePopoverParts,
} from 'design/components/popover/context';

const useSyncOpen = (nodeRef: React.RefObject<HTMLElement | null>) => {
  const { setContent } = usePopoverParts();
  const { open, setOpen } = usePopoverOpen();

  useEffect(() => {
    setContent(true);

    return () => {
      setContent(false);
    };
  }, [nodeRef, setContent]);

  useEffect(() => {
    const node = nodeRef.current;

    if (!node) {
      return undefined;
    }

    const onToggle = (event: Event) => {
      const next = (event as ToggleEvent).newState === 'open';

      if (next !== open) {
        setOpen(next);
      }
    };

    node.addEventListener('toggle', onToggle);

    return () => {
      node.removeEventListener('toggle', onToggle);
    };
  }, [nodeRef, open, setOpen]);

  // Applies a change to `open` that no click caused, such as a date chosen
  // inside the panel or `defaultOpen` on mount.
  useEffect(() => {
    const node = nodeRef.current;

    if (!node) {
      return;
    }

    const shown = node.matches(':popover-open');

    if (open && !shown) {
      node.showPopover();
    }

    if (!open && shown) {
      node.hidePopover();
    }
  }, [nodeRef, open]);
};

export { useSyncOpen };
