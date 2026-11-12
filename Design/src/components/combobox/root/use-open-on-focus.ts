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
    // Safari doesn't focus a link or button on click, so pressing one in the
    // list would blur the field to nowhere and close the list before the
    // click lands. The field keeps focus instead.
    const keep = (event: MouseEvent) => {
      event.preventDefault();
    };

    field.addEventListener('focusin', show);
    field.addEventListener('input', show);
    field.addEventListener('focusout', leave);
    list?.addEventListener('focusout', leave);
    list?.addEventListener('mousedown', keep);

    return () => {
      field.removeEventListener('focusin', show);
      field.removeEventListener('input', show);
      field.removeEventListener('focusout', leave);
      list?.removeEventListener('focusout', leave);
      list?.removeEventListener('mousedown', keep);
    };
  }, [anchor, close, content, isOpen, setOpen]);
};

export { useOpenOnFocus };
