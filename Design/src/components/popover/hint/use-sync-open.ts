import React, { useEffect } from 'react';

// Context
import {
  usePopoverIds,
  usePopoverInterest,
  usePopoverOpen,
  usePopoverParts,
} from 'design/components/popover/context';

const useSyncOpen = (
  nodeRef: React.RefObject<HTMLDivElement | null>,
  hidden: boolean
) => {
  const { id } = usePopoverIds();
  const { content, setHint } = usePopoverParts();
  const { interested } = usePopoverInterest();
  const { open } = usePopoverOpen();

  useEffect(() => {
    setHint(hidden ? 'decoration' : 'description');

    return () => {
      setHint(null);
    };
  }, [hidden, setHint]);

  useEffect(() => {
    const node = nodeRef.current;
    const trigger = document.querySelector(`[interestfor='${id}__hint']`);
    const native = trigger !== null && 'interestForElement' in trigger;

    if (!node || (content && native)) {
      return;
    }

    let show = open;

    if (!native) {
      show = content ? interested && !open : open || interested;
    }

    const shown = node.matches(':popover-open');

    if (show && !shown) {
      node.showPopover();
    }

    if (!show && shown) {
      node.hidePopover();
    }
  }, [content, id, interested, nodeRef, open]);
};

export { useSyncOpen };
