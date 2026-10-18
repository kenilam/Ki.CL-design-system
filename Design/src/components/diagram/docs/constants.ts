import type { DiagramSpec } from 'design/components';

/** The Boxes example's spec, which the Legend, Active and Failed examples build on. */
const REQUEST: DiagramSpec = {
  title: 'Request',
  description:
    'A browser sends a request to the server, which reads the database.',
  width: 560,
  height: 120,
  nodes: [
    { title: 'Browser', x: 10, y: 35, w: 140, h: 50 },
    { title: 'Server', x: 210, y: 35, w: 140, h: 50 },
    { title: 'Database', shape: 'cylinder', x: 410, y: 25, w: 140, h: 70 },
  ],
  edges: [
    {
      points: [
        [150, 60],
        [210, 60],
      ],
    },
    {
      points: [
        [350, 60],
        [410, 60],
      ],
    },
  ],
};

export { REQUEST };
