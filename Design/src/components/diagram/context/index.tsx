import React, { createContext, useContext, useId } from 'react';

// Spec
import type { DiagramState, Spec } from 'design/components/diagram/spec';

type Diagram = {
  arrow: string;
  opens?: string;
  spec: Spec;
  state?: DiagramState;
};

const DiagramContext = createContext<Diagram | null>(null);

type Props = React.PropsWithChildren<{
  /** Id of the dialog that shows this diagram full size. */
  opens?: string;
  spec: Spec;
  state?: DiagramState;
}>;

const Provider: React.FunctionComponent<Props> = ({
  children,
  opens,
  spec,
  state,
}) => {
  const arrow = useId().replace(/:/g, '');

  return (
    <DiagramContext.Provider value={{ arrow, opens, spec, state }}>
      {children}
    </DiagramContext.Provider>
  );
};

const useDiagram = () => {
  const diagram = useContext(DiagramContext);

  if (!diagram) {
    throw new Error('useDiagram needs a Diagram around it.');
  }

  return diagram;
};

export { Provider, useDiagram };
