import React, { createContext, useCallback, useContext, useState } from 'react';

// Spec
import type { ComboboxProps } from 'design/components/combobox/spec';

type Value = {
  close: () => void;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

const OpenContext = createContext<Value | null>(null);

const Open: React.FunctionComponent<ComboboxProps> = ({
  children,
  defaultOpen = false,
  onOpenChange,
  open,
}) => {
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

  return (
    <OpenContext.Provider value={{ close, isOpen, setOpen }}>
      {children}
    </OpenContext.Provider>
  );
};

const useComboboxOpen = () => {
  const value = useContext(OpenContext);

  if (!value) {
    throw new Error('Combobox parts must be used within Combobox');
  }

  return value;
};

export { Open, useComboboxOpen };
