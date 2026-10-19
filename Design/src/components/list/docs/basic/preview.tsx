import React from 'react';

import { List, ListItem } from 'design/components';

import type { Props } from 'design/components/list/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <List {...props}>
    <ListItem>Components</ListItem>
    <ListItem>Styles</ListItem>
    <ListItem>Icons</ListItem>
  </List>
);

export { Preview };
