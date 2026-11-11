import React, { createContext, useContext, useState } from 'react';

// Spec
import type { PopoverProps } from 'design/components/popover/spec';

type Props = Omit<PopoverProps, 'inline'>;

type Value = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const OpenContext = createContext<Value | null>(null);

const Open: React.FunctionComponent<Props> = ({
  children,
  defaultOpen = false,
  onOpenChange,
  open,
}) => {
  const isControlled = open !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultOpen);
  const isOpen = isControlled ? Boolean(open) : uncontrolled;

  const setOpen = (next: boolean) => {
    if (!isControlled) {
      setUncontrolled(next);
    }

    onOpenChange?.(next);
  };

  return (
    <OpenContext.Provider value={{ open: isOpen, setOpen }}>
      {children}
    </OpenContext.Provider>
  );
};

const usePopoverOpen = () => {
  const open = useContext(OpenContext);

  if (!open) {
    throw new Error('Popover parts must be used within Popover');
  }

  return open;
};

export { Open, usePopoverOpen };
