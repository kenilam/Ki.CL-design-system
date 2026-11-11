import React, { createContext, useContext, useState } from 'react';

type Password = {
  shown: boolean;
  toggle: () => void;
};

const PasswordContext = createContext<Password | null>(null);

const Provider: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const [shown, setShown] = useState(false);

  return (
    <PasswordContext.Provider
      value={{
        shown,
        toggle: () => {
          setShown((current) => {
            return !current;
          });
        },
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

const usePassword = () => {
  const password = useContext(PasswordContext);

  if (!password) {
    throw new Error('usePassword needs a PasswordInput around it.');
  }

  return password;
};

export { Provider, usePassword };
