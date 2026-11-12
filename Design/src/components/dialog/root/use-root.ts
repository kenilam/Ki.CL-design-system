import React from 'react';

// Hooks
import { useClosedBy, useOverlayContents } from 'design/hooks';

// Constants
import { CLASS_NAME } from 'design/components/dialog/constants';

// Context
import { useDialog } from 'design/components/dialog/context';

// Partials
import { useClickBeside } from './use-click-beside';
import { useShowModal } from './use-show-modal';

type ClosedBy = React.ComponentProps<'dialog'>['closedby'];

const useRoot = (
  node: React.RefObject<HTMLDialogElement | null>,
  labelled: boolean
) => {
  const dialog = useDialog();
  const open = Boolean(dialog.open);

  const shown = useOverlayContents(node, open);

  useShowModal(node, open);
  useClickBeside(node, dialog.closable);

  let closedby: ClosedBy = 'none';

  if (dialog.closable === true) {
    closedby = 'any';
  }

  if (dialog.closable === 'keyboard') {
    closedby = 'closerequest';
  }

  useClosedBy(node, closedby);

  return {
    closedby,
    id: dialog.id,
    labelledBy: dialog.header && !labelled ? `${dialog.id}--header` : undefined,
    modifiers: {
      [`${CLASS_NAME}--is-closable`]: dialog.closable,
      [`${CLASS_NAME}--is-dense`]: dialog.dense,
      [`${CLASS_NAME}--is-full-screen`]: dialog.fullScreen,
      [`${CLASS_NAME}--size--${dialog.size}`]: !dialog.fullScreen,
    },
    shown,
  };
};

export { useRoot };
