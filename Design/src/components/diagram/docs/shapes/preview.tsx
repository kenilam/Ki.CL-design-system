import React from 'react';

import { Diagram, type DiagramSpec } from 'design/components';

const spec: DiagramSpec = {
  title: 'Shapes',
  description: 'A box, a store and a queue.',
  width: 560,
  height: 120,
  nodes: [
    { title: 'Service', lines: ['rect'], x: 10, y: 25, w: 160, h: 70 },
    {
      title: 'Store',
      lines: ['cylinder'],
      shape: 'cylinder',
      x: 200,
      y: 20,
      w: 160,
      h: 80,
    },
    {
      title: 'Jobs',
      lines: ['queue'],
      shape: 'queue',
      x: 390,
      y: 25,
      w: 160,
      h: 70,
    },
  ],
  edges: [],
};

const Preview: React.FC = () => <Diagram spec={spec} />;

export { Preview };
