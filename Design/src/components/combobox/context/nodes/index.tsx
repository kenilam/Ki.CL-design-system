import React, {
  createContext,
  useContext,
  useRef,
  type RefObject,
} from 'react';

type Value = {
  anchor: RefObject<HTMLElement | null>;
  content: RefObject<HTMLElement | null>;
};

const NodesContext = createContext<Value | null>(null);

const Nodes: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const anchor = useRef<HTMLElement | null>(null);
  const content = useRef<HTMLElement | null>(null);

  return (
    <NodesContext.Provider value={{ anchor, content }}>
      {children}
    </NodesContext.Provider>
  );
};

const useComboboxNodes = () => {
  const nodes = useContext(NodesContext);

  if (!nodes) {
    throw new Error('Combobox parts must be used within Combobox');
  }

  return nodes;
};

export { Nodes, useComboboxNodes };
