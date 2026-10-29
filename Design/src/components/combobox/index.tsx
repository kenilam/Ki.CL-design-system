import React, { useCallback, useEffect, useRef, useState } from 'react';

// Components
import { Popover } from 'design/components/popover';

// Spec
import type { ComboboxProps } from './spec';

// Styles
import './styles.scss';

// Constants

// Context
import { ComboboxContext } from './context';

// Partials
import { ComboboxAnchor } from './anchor';
import { ComboboxContent } from './content';

// Not a native `<datalist>`, which can't serve a textarea.
const Combobox: React.FC<ComboboxProps> = ({
  children,
  defaultOpen = false,
  onOpenChange,
  open,
}) => {
  const anchor = useRef<HTMLElement | null>(null);
  const content = useRef<HTMLElement | null>(null);

  const [own, setOwn] = useState(defaultOpen);
  const isOpen = open ?? own;

  const setOpen = useCallback(
    (next: boolean) => {
      setOwn(next);
      onOpenChange?.(next);
    },
    [onOpenChange]
  );
  const close = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  // A text field can't be a popover invoker, so its focus and input open the
  // panel here.
  useEffect(() => {
    const field = anchor.current;
    const list = content.current;

    if (!field) {
      return undefined;
    }

    const inside = (node: EventTarget | null) => {
      return (
        node instanceof Node &&
        (field.contains(node) || Boolean(list?.contains(node)))
      );
    };
    const show = () => {
      setOpen(true);
    };
    const leave = (event: FocusEvent) => {
      if (!inside(event.relatedTarget)) {
        close();
      }
    };

    field.addEventListener('focusin', show);
    field.addEventListener('input', show);
    field.addEventListener('focusout', leave);
    list?.addEventListener('focusout', leave);

    return () => {
      field.removeEventListener('focusin', show);
      field.removeEventListener('input', show);
      field.removeEventListener('focusout', leave);
      list?.removeEventListener('focusout', leave);
    };
  }, [close, isOpen, setOpen]);

  return (
    <ComboboxContext.Provider value={{ anchor, content, close }}>
      <Popover onOpenChange={setOpen} open={isOpen}>
        {children}
      </Popover>
    </ComboboxContext.Provider>
  );
};

Combobox.displayName = 'Combobox';

export type {
  ComboboxAnchorProps,
  ComboboxContentProps,
  ComboboxProps,
} from './spec';

export { Combobox, ComboboxAnchor, ComboboxContent };
