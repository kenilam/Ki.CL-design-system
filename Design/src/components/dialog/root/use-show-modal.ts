import React, { useEffect } from 'react';

const useShowModal = (
  node: React.RefObject<HTMLDialogElement | null>,
  open: boolean
) => {
  // Not the `open` attribute: it shows the dialog without the top layer,
  // focus trap or inert background that `showModal()` gives.
  useEffect(() => {
    const dialog = node.current;

    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [node, open]);
};

export { useShowModal };
