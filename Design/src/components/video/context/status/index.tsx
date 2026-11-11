import React, { createContext, useContext, useState } from 'react';

type Value = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const StatusContext = createContext<Value | null>(null);

const Status: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <StatusContext.Provider value={{ loading, setLoading }}>
      {children}
    </StatusContext.Provider>
  );
};

const useStatus = () => {
  const status = useContext(StatusContext);

  if (!status) {
    throw new Error('useStatus needs a Video around it.');
  }

  return status;
};

export { Status, useStatus };
