import React from 'react';

import { Diagram, type DiagramSpec } from 'design/components';

import { REQUEST } from 'design/components/diagram/docs/constants';

const spec: DiagramSpec = {
  ...REQUEST,
  caption: 'Every request reads the database once.',
  legend: [
    { label: 'solid', value: 'a request' },
    { label: 'green', level: 'confirm', value: 'a write' },
  ],
};

const Preview: React.FC = () => <Diagram spec={spec} />;

export { Preview };
