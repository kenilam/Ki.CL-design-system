import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { PopoverContent } from 'design/components/popover';

// Spec
import type { ComboboxContentProps } from 'design/components/combobox/spec';

// Constants
import { CLASS_NAME as COMBOBOX } from 'design/components/combobox/constants';

// Context
import { useComboboxNodes } from 'design/components/combobox/context';

// Partials
import { useKeyDown } from './use-key-down';

// Styles
import './styles.scss';

const CLASS_NAME = `${COMBOBOX}__content`;

const ComboboxContent: React.FC<ComboboxContentProps> = ({
  children,
  className,
  onKeyDown,
  ...rest
}) => {
  const { content } = useComboboxNodes();
  const keyDown = useKeyDown(onKeyDown);

  return (
    <PopoverContent
      {...rest}
      className={classNames(CLASS_NAME, className)}
      onKeyDown={keyDown}
      // `manual` because an `auto` popover closes on a click outside it, and
      // the field is outside it.
      popover='manual'
      ref={content}
      role='group'
    >
      {children}
    </PopoverContent>
  );
};

ComboboxContent.displayName = 'ComboboxContent';

export { ComboboxContent };
