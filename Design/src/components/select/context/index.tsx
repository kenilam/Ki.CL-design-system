import React, { createContext, useContext, useState } from 'react';

type Value = {
  selectedContent?: string;
  setSelectedContent: (selectedContent?: string) => void;
};

const SelectContext = createContext<Value | null>(null);

const Provider: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const [selectedContent, setSelectedContent] = useState<string>();

  return (
    <SelectContext.Provider value={{ selectedContent, setSelectedContent }}>
      {children}
    </SelectContext.Provider>
  );
};

const useSelect = () => {
  const select = useContext(SelectContext);

  if (!select) {
    throw new Error('Select parts must be used within Select');
  }

  return select;
};

export { Provider, useSelect };
