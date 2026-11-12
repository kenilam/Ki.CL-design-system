import React, { createContext, useContext, useState } from 'react';

type Value = {
  interested: boolean;
  setInterested: (interested: boolean) => void;
};

const InterestContext = createContext<Value | null>(null);

const Interest: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const [interested, setInterested] = useState(false);

  return (
    <InterestContext.Provider value={{ interested, setInterested }}>
      {children}
    </InterestContext.Provider>
  );
};

const usePopoverInterest = () => {
  const interest = useContext(InterestContext);

  if (!interest) {
    throw new Error('Popover parts must be used within Popover');
  }

  return interest;
};

export { Interest, usePopoverInterest };
