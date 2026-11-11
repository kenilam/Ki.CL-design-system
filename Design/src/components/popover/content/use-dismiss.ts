import React, { useEffect } from 'react';

// Context
import {
  usePopoverIds,
  usePopoverOpen,
} from 'design/components/popover/context';

const useDismiss = (nodeRef: React.RefObject<HTMLElement | null>) => {
  const { id } = usePopoverIds();
  const { open } = usePopoverOpen();

  useEffect(() => {
    const node = nodeRef.current;

    if (!node || !open) {
      return undefined;
    }

    const trigger = document.getElementById(`${id}__trigger`);

    const close = () => {
      const focused = node.contains(document.activeElement);

      node.hidePopover();

      if (focused) {
        document
          .getElementById(`${id}__trigger`)
          ?.focus({ focusVisible: true, preventScroll: true });
      }
    };

    const onScroll = (event: Event) => {
      if (event.target instanceof Node && node.contains(event.target)) {
        return;
      }

      const anchor = trigger?.getBoundingClientRect();
      const panel = node.getBoundingClientRect();

      if (
        anchor &&
        (panel.right <= anchor.left || panel.left >= anchor.right)
      ) {
        return;
      }

      const focused = node.contains(document.activeElement);

      if (!focused && document.activeElement?.matches('input, textarea')) {
        return;
      }

      close();
    };

    const onResize = () => {
      if (document.activeElement?.matches('input, textarea')) {
        return;
      }

      close();
    };

    const onFocusOut = (event: FocusEvent) => {
      const next = event.relatedTarget;

      if (!(next instanceof Element)) {
        return;
      }

      if (next === trigger || next.closest(':popover-open')) {
        return;
      }

      node.hidePopover();
    };

    document.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true,
    });
    window.addEventListener('resize', onResize);
    node.addEventListener('focusout', onFocusOut);

    return () => {
      document.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('resize', onResize);
      node.removeEventListener('focusout', onFocusOut);
    };
  }, [id, nodeRef, open]);
};

export { useDismiss };
