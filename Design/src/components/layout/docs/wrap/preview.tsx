import React from 'react';

import { Badge, Card, CardContent, Layout } from 'design/components';

import type { WrapProps } from 'design/components/layout/docs/controls';

const TAGS = [
  'React',
  'TypeScript',
  'Module Federation',
  'GraphQL',
  'Apollo',
  'SCSS',
  'Node',
  'Express',
  'Rust',
  'Protobuf',
  'WebSocket',
  'Three.js',
  'Vite',
  'Docker',
];

const Preview: React.FC<WrapProps> = (props) => (
  <Card>
    <Layout display='flex' gap='narrow' wrap {...props}>
      <CardContent>
        {TAGS.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </CardContent>
    </Layout>
  </Card>
);

export { Preview };
