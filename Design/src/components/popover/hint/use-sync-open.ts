import React, { useEffect } from 'react';

// Context
import {
  usePopoverInterest,
  usePopoverOpen,
  usePopoverParts,
} from 'design/components/popover/context';

const useSyncOpen = (
  nodeRef: React.RefObject<HTMLDivElement | null>,
  hidden: boolean
) => {
  const { content, setHint } = usePopoverParts();
  const { interested, setInterested } = usePopoverInterest();
  const { open } = usePopoverOpen();

  useEffect(() => {
    setHint(hidden ? 'decoration' : 'description');

    return () => {
      setHint(null);
    };
  }, [hidden, setHint]);

  // Kept in step if the hint is closed some other way.
  useEffect(() => {
    const node = nodeRef.current;

    if (!node) {
      return;
    }

    const toggled = (event: Event) => {
      if ((event as ToggleEvent).newState === 'closed') {
        setInterested(false);
      }
    };

    node.addEventListener('toggle', toggled);

    return () => {
      node.removeEventListener('toggle', toggled);
    };
  }, [nodeRef, setInterested]);

  useEffect(() => {
    const node = nodeRef.current;

    if (!node) {
      return;
    }

    const show = content ? interested && !open : open || interested;
    const shown = node.matches(':popover-open');

    if (show && !shown) {
      node.showPopover();
    }

    if (!show && shown) {
      node.hidePopover();
    }
  }, [content, interested, nodeRef, open]);
};

export { useSyncOpen };
