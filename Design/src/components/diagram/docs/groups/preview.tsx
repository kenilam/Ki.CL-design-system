import React from 'react';

import { Diagram, type DiagramSpec } from 'design/components';

const spec: DiagramSpec = {
  title: 'Regions',
  description: 'Two regions, each with a server, behind one load balancer.',
  width: 560,
  height: 220,
  groups: [
    { label: 'Region A', x: 200, y: 10, w: 160, h: 90 },
    { label: 'Region B', x: 200, y: 120, w: 160, h: 90 },
  ],
  nodes: [
    { title: 'Load balancer', x: 10, y: 85, w: 140, h: 50 },
    { title: 'Server', x: 210, y: 40, w: 140, h: 50 },
    { title: 'Server', x: 210, y: 150, w: 140, h: 50 },
  ],
  edges: [
    {
      points: [
        [150, 100],
        [180, 100],
        [180, 65],
        [210, 65],
      ],
    },
    {
      points: [
        [150, 120],
        [180, 120],
        [180, 175],
        [210, 175],
      ],
    },
  ],
};

const Preview: React.FC = () => <Diagram spec={spec} />;

export { Preview };
