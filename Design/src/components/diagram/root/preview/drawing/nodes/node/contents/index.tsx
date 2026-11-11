import React from 'react';

// Partials
import { Lines } from './lines';
import { Rows } from './rows';
import { useNode } from 'design/components/diagram/root/preview/drawing/nodes/node/context';

const NodeContents: React.FunctionComponent = () => {
  const node = useNode();

  if (node.rows) {
    return <Rows />;
  }

  return <Lines />;
};

export { NodeContents };
