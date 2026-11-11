import React, { useEffect } from 'react';

// Context
import {
  usePopoverOpen,
  usePopoverParts,
} from 'design/components/popover/context';

const useSyncOpen = (nodeRef: React.RefObject<HTMLDivElement | null>) => {
  const { content, setHint } = usePopoverParts();
  const { open } = usePopoverOpen();

  useEffect(() => {
    setHint(true);

    return () => {
      setHint(false);
    };
  }, [setHint]);

  useEffect(() => {
    const node = nodeRef.current;

    if (!node || content) {
      return;
    }

    const shown = node.matches(':popover-open');

    if (open && !shown) {
      node.showPopover();
    }

    if (!open && shown) {
      node.hidePopover();
    }
  }, [content, nodeRef, open]);
};

export { useSyncOpen };
