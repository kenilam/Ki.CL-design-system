import React from 'react';

import { Diagram, type DiagramSpec } from 'design/components';

import { REQUEST } from 'design/components/diagram/docs/constants';

const spec: DiagramSpec = {
  ...REQUEST,
  caption: 'Every request reads the database once.',
  // The read is drawn green, so the legend's colour is on the drawing.
  edges: [REQUEST.edges[0], { ...REQUEST.edges[1], accent: 'green' }],
  legend: [
    { label: 'solid', value: 'a request' },
    { label: 'green', level: 'confirm', value: 'a read' },
  ],
};

const Preview: React.FC = () => <Diagram spec={spec} />;

export { Preview };
