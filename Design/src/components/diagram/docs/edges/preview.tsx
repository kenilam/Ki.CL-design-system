import React from 'react';

import { Diagram, type DiagramSpec } from 'design/components';

const spec: DiagramSpec = {
  title: 'Edges',
  description:
    'A plain arrow, a dashed one, a coloured one with a label, and one with two heads.',
  width: 560,
  height: 200,
  nodes: [
    { title: 'A', x: 10, y: 75, w: 100, h: 50 },
    { title: 'B', x: 450, y: 10, w: 100, h: 40 },
    { title: 'C', x: 450, y: 60, w: 100, h: 40 },
    { title: 'D', x: 450, y: 110, w: 100, h: 40 },
    { title: 'E', x: 450, y: 160, w: 100, h: 30 },
  ],
  edges: [
    {
      points: [
        [110, 85],
        [280, 85],
        [280, 30],
        [450, 30],
      ],
    },
    {
      dashed: true,
      points: [
        [110, 95],
        [450, 80],
      ],
    },
    {
      accent: 'green',
      label: 'writes',
      lx: 280,
      ly: 120,
      points: [
        [110, 105],
        [450, 130],
      ],
    },
    {
      both: true,
      accent: 'orange',
      points: [
        [110, 115],
        [250, 115],
        [250, 175],
        [450, 175],
      ],
    },
  ],
};

const Preview: React.FC = () => <Diagram spec={spec} />;

export { Preview };
