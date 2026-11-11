import React, { createContext, useContext } from 'react';

// Partials
import { useItems } from './use-items';

const ItemsContext = createContext<ReturnType<typeof useItems> | null>(null);

const Items: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const items = useItems();

  return (
    <ItemsContext.Provider value={items}>{children}</ItemsContext.Provider>
  );
};

const useCheckboxItems = () => {
  return useContext(ItemsContext);
};

export { Items, useCheckboxItems };
