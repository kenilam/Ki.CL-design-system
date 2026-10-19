import React from 'react';

import { Card, CardContent, CardTitle, Layout } from 'design/components';

import type { FillProps } from 'design/components/layout/docs/controls';

const PROJECTS = ['Arm', 'Moonshot', 'Design', 'API', 'Host', 'Interpreter'];

const Preview: React.FC<FillProps> = (props) => (
  <Card>
    <Layout fill={3} gap='normal' {...props}>
      <CardContent>
        {PROJECTS.map((project) => (
          <Card
            header={<CardTitle is='h3'>{project}</CardTitle>}
            is='article'
            key={project}
            variant='secondary'
          />
        ))}
      </CardContent>
    </Layout>
  </Card>
);

export { Preview };
