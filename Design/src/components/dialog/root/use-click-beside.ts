import React, { useEffect } from 'react';

// Spec
import type * as Spec from 'design/components/dialog/spec';

const useClickBeside = (
  node: React.RefObject<HTMLDialogElement | null>,
  closable: Spec.Props['closable']
) => {
  // The element fills the window, so a click beside the panel lands on the
  // dialog itself, which `closedby` doesn't count as outside.
  useEffect(() => {
    const dialog = node.current;

    if (!dialog || closable !== true) {
      return;
    }

    const click = (event: MouseEvent) => {
      if (event.target === dialog) {
        dialog.requestClose();
      }
    };

    dialog.addEventListener('click', click);

    return () => {
      dialog.removeEventListener('click', click);
    };
  }, [closable, node]);
};

export { useClickBeside };
