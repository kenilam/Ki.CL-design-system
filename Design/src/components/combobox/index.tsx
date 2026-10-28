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

/**
 * A field with a list of suggestions under it - API after
 * https://ui.shadcn.com/docs/components/combobox, for any field, a textarea
 * included, which a native `<datalist>` cannot serve.
 *
 * Built on `Popover`, so placement, flipping and the transition are the
 * popover's. The differences: the panel is placed against the field rather
 * than a button, it is a `manual` popover so typing in the field does not
 * dismiss it, and the arrow keys move from the field into the list and back.
 */
const Combobox: React.FC<ComboboxProps> = ({
  children,
  defaultOpen = false,
  onOpenChange,
  open,
}) => {
  const anchor = useRef<HTMLElement | null>(null);
  const content = useRef<HTMLElement | null>(null);

  /*
   * Its own open state unless given one. A text field can't be an invoker,
   * so no `popovertarget` or `commandfor` opens the panel as the reader
   * types; the field's focus and input do, here.
   */
  const [own, setOwn] = useState(defaultOpen);
  const isOpen = open ?? own;

  const setOpen = useCallback(
    (next: boolean) => {
      setOwn(next);
      onOpenChange?.(next);
    },
    [onOpenChange]
  );
  const close = useCallback(() => setOpen(false), [setOpen]);

  useEffect(() => {
    const field = anchor.current;
    const list = content.current;

    if (!field) {
      return undefined;
    }

    const inside = (node: EventTarget | null) =>
      node instanceof Node &&
      (field.contains(node) || Boolean(list?.contains(node)));
    const show = () => setOpen(true);
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
