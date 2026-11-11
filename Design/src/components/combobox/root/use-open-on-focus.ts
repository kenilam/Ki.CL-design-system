import { useEffect } from 'react';

// Context
import {
  useComboboxNodes,
  useComboboxOpen,
} from 'design/components/combobox/context';

const useOpenOnFocus = () => {
  const { anchor, content } = useComboboxNodes();
  const { close, isOpen, setOpen } = useComboboxOpen();

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
  }, [anchor, close, content, isOpen, setOpen]);
};

export { useOpenOnFocus };
