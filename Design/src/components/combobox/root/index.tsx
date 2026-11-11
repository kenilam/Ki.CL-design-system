import React from 'react';

// Components
import { Popover } from 'design/components/popover';

// Context
import { useComboboxOpen } from 'design/components/combobox/context';

// Partials
import { useOpenOnFocus } from './use-open-on-focus';

const Root: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const { isOpen, setOpen } = useComboboxOpen();

  useOpenOnFocus();

  return (
    <Popover onOpenChange={setOpen} open={isOpen}>
      {children}
    </Popover>
  );
};

export { Root };
