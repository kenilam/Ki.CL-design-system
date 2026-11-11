import React from 'react';

// Partials
import { NodeContents } from './contents';
import { Provider } from './context';
import { NodeShape } from './shape';

type Props = { position: string };

const Node: React.FunctionComponent<Props> = ({ position }) => {
  return (
    <Provider position={position}>
      <NodeShape />
      <NodeContents />
    </Provider>
  );
};

export { Node };
