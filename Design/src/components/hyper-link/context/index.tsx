import React, { createContext, useContext } from 'react';

// Partials
import { type Props, useValue } from './use-value';

const HyperLinkContext = createContext<ReturnType<typeof useValue> | null>(
  null
);

const Provider: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
  children,
  ...props
}) => {
  return (
    <HyperLinkContext.Provider value={useValue(props)}>
      {children}
    </HyperLinkContext.Provider>
  );
};

const useHyperLink = () => {
  const hyperLink = useContext(HyperLinkContext);

  if (!hyperLink) {
    throw new Error('useHyperLink needs a HyperLink around it.');
  }

  return hyperLink;
};

export { Provider, useHyperLink };
