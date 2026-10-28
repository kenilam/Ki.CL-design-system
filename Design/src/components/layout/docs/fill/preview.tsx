import React from 'react';

import { Card, CardTitle, List } from 'design/components';

import type { FillProps } from 'design/components/layout/docs/controls';

const PROJECTS = ['Arm', 'Moonshot', 'Design', 'API', 'Host', 'Interpreter'];

const Preview: React.FC<FillProps> = (props) => (
  <Card is='section'>
    <List fill={3} gap='normal' {...props}>
      {PROJECTS.map((project) => (
        <Card
          header={<CardTitle is='h3'>{project}</CardTitle>}
          is='li'
          key={project}
          variant='secondary'
        />
      ))}
    </List>
  </Card>
);

export { Preview };
