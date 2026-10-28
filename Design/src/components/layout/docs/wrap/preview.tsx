import React from 'react';

import { Badge, List } from 'design/components';

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
  <List display='flex' gap='narrow' wrap {...props}>
    {TAGS.map((tag) => (
      <Badge is='li' key={tag}>
        {tag}
      </Badge>
    ))}
  </List>
);

export { Preview };
