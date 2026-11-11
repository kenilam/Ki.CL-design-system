// Spec
import type { ComboboxContentProps } from 'design/components/combobox/spec';

// Constants
import { FOCUSABLE } from 'design/components/combobox/constants';

// Context
import {
  useComboboxNodes,
  useComboboxOpen,
} from 'design/components/combobox/context';

// Helpers
import { focusables } from 'design/components/combobox/focusables';

type Event = Parameters<NonNullable<ComboboxContentProps['onKeyDown']>>[0];

const useKeyDown = (onKeyDown: ComboboxContentProps['onKeyDown']) => {
  const { anchor, content } = useComboboxNodes();
  const { close } = useComboboxOpen();

  const toField = () => {
    anchor.current?.focus();
  };

  return (event: Event) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) {
      return;
    }

    const items = focusables(content.current, FOCUSABLE);
    const at = items.indexOf(document.activeElement as HTMLElement);

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      items[Math.min(at + 1, items.length - 1)]?.focus();
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (at <= 0) {
        toField();
        return;
      }
      items[at - 1]?.focus();
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      toField();
    }
  };
};

export { useKeyDown };
