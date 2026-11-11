import React, { createContext, useContext, useRef } from 'react';

// Spec
import type { ColumnSpan, HeadingIs } from 'design/components';

type Variables = {
  fill: ColumnSpan;
  names: string[];
  preview?: React.FunctionComponent<{ name: string }>;
  probe: React.RefObject<HTMLElement | null>;
  property?: string;
  scope: HeadingIs | 'span';
};

const VariablesContext = createContext<Variables | null>(null);

type Props = React.PropsWithChildren<Omit<Variables, 'probe'>>;

const Provider: React.FunctionComponent<Props> = ({ children, ...props }) => {
  const probe = useRef<HTMLElement>(null);

  return (
    <VariablesContext.Provider value={{ ...props, probe }}>
      {children}
    </VariablesContext.Provider>
  );
};

const useVariables = () => {
  const variables = useContext(VariablesContext);

  if (!variables) {
    throw new Error('useVariables needs a Variables around it.');
  }

  return variables;
};

export { Provider, useVariables };
