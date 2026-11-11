import React from 'react';

// Context
import { useDiagram } from 'design/components/diagram/context';

// Partials
import { Node } from './node';
import { positionOf } from './position-of';

const Nodes: React.FunctionComponent = () => {
  const {
    spec: { nodes },
  } = useDiagram();

  return nodes.map((node) => {
    const position = positionOf(node);

    return <Node key={position} position={position} />;
  });
};

export { Nodes };
