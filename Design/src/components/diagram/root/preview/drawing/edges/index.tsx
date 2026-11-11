import React from 'react';

// Context
import { useDiagram } from 'design/components/diagram/context';

// Partials
import { Edge } from './edge';
import { endsOf } from './ends-of';

const Edges: React.FunctionComponent = () => {
  const {
    spec: { edges },
  } = useDiagram();

  return edges.map((edge) => {
    const ends = endsOf(edge);

    return <Edge ends={ends} key={ends} />;
  });
};

export { Edges };
