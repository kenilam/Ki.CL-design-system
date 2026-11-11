import React, { createContext, useContext, useState } from 'react';

type Element = {
  element: HTMLElement | null;
  setElement: (element: HTMLElement | null) => void;
};

const ElementContext = createContext<Element | null>(null);

const Provider: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  return (
    <ElementContext.Provider value={{ element, setElement }}>
      {children}
    </ElementContext.Provider>
  );
};

const useElement = () => {
  const element = useContext(ElementContext);

  if (!element) {
    throw new Error('useElement needs a Preview around it.');
  }

  return element;
};

export { Provider, useElement };
