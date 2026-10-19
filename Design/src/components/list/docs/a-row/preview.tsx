import React from 'react';

import { Badge, List, ListItem } from 'design/components';

import type { Props } from 'design/components/list/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <List autoFlow='column' gap='narrow' {...props}>
    <ListItem>
      <Badge variant='secondary'>React</Badge>
    </ListItem>
    <ListItem>
      <Badge variant='secondary'>TypeScript</Badge>
    </ListItem>
    <ListItem>
      <Badge variant='secondary'>Sass</Badge>
    </ListItem>
  </List>
);

export { Preview };
