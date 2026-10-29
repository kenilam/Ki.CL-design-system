import React from 'react';

import { Diagram, type DiagramSpec } from 'design/components';

import { REQUEST } from 'design/components/diagram/docs/constants';

const spec: DiagramSpec = {
  ...REQUEST,
  nodes: [
    { id: 'browser', title: 'Browser', x: 10, y: 35, w: 140, h: 50 },
    { id: 'server', title: 'Server', x: 210, y: 35, w: 140, h: 50 },
    {
      id: 'database',
      title: 'Database',
      shape: 'cylinder',
      x: 410,
      y: 25,
      w: 140,
      h: 70,
    },
  ],
};

const Preview: React.FC = () => {
  return <Diagram spec={spec} state={{ active: ['server'] }} />;
};

export { Preview };
