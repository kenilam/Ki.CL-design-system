import React, { createContext, useContext, useRef } from 'react';

type Value = {
  click: () => void;
  clicked: () => boolean;
};

const ClickedContext = createContext<Value | null>(null);

const Provider: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const clicked = useRef(false);

  return (
    <ClickedContext.Provider
      value={{
        click: () => {
          clicked.current = true;
        },
        clicked: () => {
          const was = clicked.current;

          clicked.current = false;

          return was;
        },
      }}
    >
      {children}
    </ClickedContext.Provider>
  );
};

const useClicked = () => {
  const value = useContext(ClickedContext);

  if (!value) {
    throw new Error('Details parts must be used within Details');
  }

  return value;
};

export { Provider, useClicked };
