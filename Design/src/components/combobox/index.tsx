import React, { useCallback, useRef, useState } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Popover } from 'design/components/popover';

// Spec
import type { ComboboxProps } from './spec';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from './constants';

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
  className,
  defaultOpen = false,
  onBlur,
  onFocus,
  onInput,
  onOpenChange,
  open,
  ...rest
}) => {
  const anchor = useRef<HTMLDivElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);

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

  /** Whether the event came from the field the panel belongs to. */
  const fromField = (event: React.SyntheticEvent) =>
    event.target instanceof Node &&
    Boolean(anchor.current?.contains(event.target));

  return (
    <ComboboxContext.Provider value={{ anchor, content, close }}>
      <Popover
        {...rest}
        /* A field takes its row, so the panel can be as wide as the field. */
        display='grid'
        className={classNames(CLASS_NAME, className)}
        onBlur={(event) => {
          onBlur?.(event);
          // Focus moved somewhere other than the field or the list.
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            close();
          }
        }}
        onFocus={(event) => {
          onFocus?.(event);

          if (fromField(event)) {
            setOpen(true);
          }
        }}
        onInput={(event) => {
          onInput?.(event);

          if (fromField(event)) {
            setOpen(true);
          }
        }}
        onOpenChange={setOpen}
        open={isOpen}
      >
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
