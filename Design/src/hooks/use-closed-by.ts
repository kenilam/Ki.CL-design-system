import React, { useEffect } from 'react';

type ClosedBy = React.ComponentProps<'dialog'>['closedby'];

/** Safari has no `closedby`, so Escape would still close a modal that sets `none`. */
const useClosedBy = (
  node: React.RefObject<HTMLElement | null>,
  closedby: ClosedBy
) => {
  useEffect(() => {
    const dialog = node.current;

    if (
      !dialog ||
      closedby !== 'none' ||
      'closedBy' in HTMLDialogElement.prototype
    ) {
      return;
    }

    const cancel = (event: Event) => {
      event.preventDefault();
    };

    dialog.addEventListener('cancel', cancel);

    return () => {
      dialog.removeEventListener('cancel', cancel);
    };
  }, [closedby, node]);
};

export { useClosedBy };
