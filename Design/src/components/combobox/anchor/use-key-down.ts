import { useEffect } from 'react';

// Components
import { usePopover } from 'design/components';

// Constants
import { FOCUSABLE } from 'design/components/combobox/constants';

// Context
import {
  useComboboxNodes,
  useComboboxOpen,
} from 'design/components/combobox/context';

// Helpers
import { focusables } from 'design/components/combobox/focusables';

const useKeyDown = () => {
  const { anchor, content } = useComboboxNodes();
  const { close } = useComboboxOpen();
  const { open } = usePopover();

  useEffect(() => {
    const node = anchor.current;
    if (!node || !open) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) {
        return;
      }
      if (event.key === 'ArrowDown') {
        const [first] = focusables(content.current, FOCUSABLE);
        if (first) {
          event.preventDefault();
          first.focus();
        }
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
      }
    };

    node.addEventListener('keydown', onKeyDown);
    return () => {
      node.removeEventListener('keydown', onKeyDown);
    };
  }, [anchor, close, content, open]);
};

export { useKeyDown };
