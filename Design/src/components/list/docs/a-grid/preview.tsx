import React from 'react';

import { Card, CardTitle, List, ListItem } from 'design/components';

import type { GridProps } from 'design/components/list/docs/controls';

const PROJECTS = ['Arm', 'Moonshot', 'Design', 'API', 'Host', 'Interpreter'];

const Preview: React.FC<GridProps> = (props) => (
  <List className='kicl-inline-size-full' fill={4} {...props}>
    {PROJECTS.map((project) => (
      <ListItem key={project}>
        <Card header={<CardTitle is='h3'>{project}</CardTitle>} />
      </ListItem>
    ))}
  </List>
);

export { Preview };
