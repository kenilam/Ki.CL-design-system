import React, { PropsWithChildren, useContext } from 'react';

// Hooks
import { useResizeObserver } from 'design/hooks';

const DEFAULT: ReturnType<typeof useResizeObserver> = {
  node: { current: null },
  rect: undefined,
};

const Context = React.createContext(DEFAULT);

const GlobalHeaderProvider: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const value = useResizeObserver();

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useGlobalHeaderContext = () => {
  return useContext(Context);
};

export { useGlobalHeaderContext, GlobalHeaderProvider };
