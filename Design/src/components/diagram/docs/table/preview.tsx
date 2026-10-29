import React from 'react';

import { Diagram, type DiagramSpec } from 'design/components';

const spec: DiagramSpec = {
  title: 'User',
  description: 'The user table: an id, an email and when it was made.',
  width: 560,
  height: 150,
  nodes: [
    {
      title: 'User',
      rows: [
        { key: 'PK', name: 'id', type: 'uuid' },
        { name: 'email', type: 'text', note: 'unique' },
        { name: 'created', type: 'date' },
      ],
      x: 140,
      y: 10,
      w: 280,
      h: 130,
    },
  ],
  edges: [],
};

const Preview: React.FC = () => {
  return <Diagram spec={spec} />;
};

export { Preview };
