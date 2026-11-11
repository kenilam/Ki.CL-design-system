import React, { createContext, useContext } from 'react';

// Context
import { useDiagram } from 'design/components/diagram/context';

// Spec
import type { Node } from 'design/components/diagram/spec';

// Partials
import { positionOf } from 'design/components/diagram/root/preview/drawing/nodes/position-of';

const NodeContext = createContext<Node | null>(null);

type Props = React.PropsWithChildren<{ position: string }>;

const Provider: React.FunctionComponent<Props> = ({ children, position }) => {
  const { spec } = useDiagram();
  const node = spec.nodes.find((item) => {
    return positionOf(item) === position;
  });

  if (!node) {
    return null;
  }

  return <NodeContext.Provider value={node}>{children}</NodeContext.Provider>;
};

const useNode = () => {
  const node = useContext(NodeContext);

  if (!node) {
    throw new Error('useNode needs a diagram Node around it.');
  }

  return node;
};

export { Provider, useNode };
