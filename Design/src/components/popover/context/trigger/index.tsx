import React, { createContext, useContext } from 'react';

const TriggerContext = createContext(false);

const Trigger: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <TriggerContext.Provider value={true}>{children}</TriggerContext.Provider>
  );
};

const usePopoverTrigger = () => {
  return useContext(TriggerContext);
};

export { Trigger, usePopoverTrigger };
