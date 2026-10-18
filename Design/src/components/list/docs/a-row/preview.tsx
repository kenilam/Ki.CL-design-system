import React from 'react';

import { List, ListItem } from 'design/components';

import type { Props } from 'design/components/list/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <List autoFlow='column' gap='narrow' {...props}>
    <ListItem>React</ListItem>
    <ListItem>TypeScript</ListItem>
    <ListItem>Sass</ListItem>
  </List>
);

export { Preview };
