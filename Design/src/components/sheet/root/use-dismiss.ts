import React, { useEffect, useRef } from 'react';

const useDismiss = (
  node: React.RefObject<HTMLElement | null>,
  closable: boolean
) => {
  const dismissable = useRef(closable);

  useEffect(() => {
    dismissable.current = closable;
  }, [closable]);

  useEffect(() => {
    const element = node.current as HTMLDialogElement | null;

    if (!element) {
      return;
    }

    // A modal sheet isn't a popover, so its hide buttons close it here.
    const click = (event: MouseEvent) => {
      if (!element.open) {
        return;
      }

      const button = (event.target as Element | null)?.closest('button');

      if (
        button?.popoverTargetElement === element &&
        button.popoverTargetAction !== 'show'
      ) {
        element.close();
      }
    };

    // A manual popover ignores Escape; a modal dialog handles it itself.
    const keydown = (event: KeyboardEvent) => {
      if (
        event.key === 'Escape' &&
        dismissable.current &&
        element.matches(':popover-open')
      ) {
        element.hidePopover();
      }
    };

    element.addEventListener('keydown', keydown);
    document.addEventListener('click', click);

    return () => {
      element.removeEventListener('keydown', keydown);
      document.removeEventListener('click', click);
    };
  }, [node]);
};

export { useDismiss };
