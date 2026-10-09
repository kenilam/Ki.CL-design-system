import React, { PropsWithChildren, useContext } from 'react';

// Hooks
import { useResizeObserver } from '../../hooks';

const DEFAULT: ReturnType<typeof useResizeObserver> = {
  node: { current: null },
  rect: undefined,
};

const Context = React.createContext(DEFAULT);

/** Measures the header, for the height the stylesheet reads. */
const GlobalHeaderProvider: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const value = useResizeObserver();

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useGlobalHeaderContext = () => useContext(Context);

export { useGlobalHeaderContext, GlobalHeaderProvider };
