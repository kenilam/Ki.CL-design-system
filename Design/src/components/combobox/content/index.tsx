import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { PopoverContent } from 'design/components/popover';

// Spec
import type { ComboboxContentProps } from 'design/components/combobox/spec';

// Constants
import {
  CLASS_NAME as COMBOBOX,
  FOCUSABLE,
} from 'design/components/combobox/constants';

// Context
import { focusables, useCombobox } from 'design/components/combobox/context';

const CLASS_NAME = `${COMBOBOX}__content`;

const ComboboxContent: React.FC<ComboboxContentProps> = ({
  children,
  className,
  onKeyDown,
  ...rest
}) => {
  const combobox = useCombobox();

  const toField = () => {
    combobox.anchor.current?.focus();
  };

  return (
    <PopoverContent
      {...rest}
      className={classNames(CLASS_NAME, className)}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (event.defaultPrevented) {
          return;
        }

        const items = focusables(combobox.content.current, FOCUSABLE);
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
          combobox.close();
          toField();
        }
      }}
      // `manual` because an `auto` popover closes on a click outside it, and
      // the field is outside it.
      popover='manual'
      ref={combobox.content}
      role='group'
    >
      {children}
    </PopoverContent>
  );
};

ComboboxContent.displayName = 'ComboboxContent';

export { ComboboxContent };
