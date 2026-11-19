import React, { createContext, useContext, useState } from 'react';

type Hint = 'decoration' | 'description' | null;

type Value = {
  /** So the trigger only points at parts that are rendered. */
  content: boolean;
  setContent: (content: boolean) => void;
  hint: Hint;
  setHint: (hint: Hint) => void;
};

const PartsContext = createContext<Value | null>(null);

const Parts: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const [content, setContent] = useState(false);
  const [hint, setHint] = useState<Hint>(null);

  return (
    <PartsContext.Provider value={{ content, hint, setContent, setHint }}>
      {children}
    </PartsContext.Provider>
  );
};

const usePopoverParts = () => {
  const parts = useContext(PartsContext);

  if (!parts) {
    throw new Error('Popover parts must be used within Popover');
  }

  return parts;
};

export { Parts, usePopoverParts };
