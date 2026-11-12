import React, { useEffect, useRef } from 'react';

// Hooks
import { useClosedBy, useOverlayContents } from 'design/hooks';

// Spec
import type { SheetProps } from 'design/components/sheet/spec';

// Context
import { useSheet } from 'design/components/sheet/context';

// Partials
import { useDismiss } from './use-dismiss';
import { useModal } from './use-modal';
import { useToggle } from './use-toggle';

type Options = Pick<SheetProps, 'defaultOpen' | 'modal' | 'onOpenChange'> & {
  labelled: boolean;
};

const useRoot = (
  node: React.RefObject<HTMLElement | null>,
  { defaultOpen = false, labelled, modal = false, onOpenChange }: Options
) => {
  const sheet = useSheet();
  const shown = useOverlayContents(node, defaultOpen);
  const opening = useRef(defaultOpen);
  const closedby: React.ComponentProps<'dialog'>['closedby'] = sheet.closable
    ? 'any'
    : 'none';

  useModal(node, modal);
  useToggle(node, onOpenChange);
  useDismiss(node, sheet.closable);
  useClosedBy(node, closedby);

  useEffect(() => {
    const element = node.current;

    if (
      opening.current &&
      element &&
      !element.matches(':popover-open, [open]')
    ) {
      element.showPopover();
    }
  }, [node]);

  return {
    closable: sheet.closable,
    closedby,
    id: sheet.id,
    labelledBy: sheet.header && !labelled ? `${sheet.id}--header` : undefined,
    shown,
  };
};

export { useRoot };
