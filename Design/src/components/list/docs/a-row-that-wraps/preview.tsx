import React from 'react';

import { List, ListItem } from 'design/components';

import type { Props } from 'design/components/list/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <List autoFlow='column' gap='narrow' wrap {...props}>
    <ListItem>Badge</ListItem>
    <ListItem>Button</ListItem>
    <ListItem>Card</ListItem>
    <ListItem>Checkbox</ListItem>
    <ListItem>Dialog</ListItem>
    <ListItem>Popover</ListItem>
    <ListItem>Select</ListItem>
    <ListItem>Switch</ListItem>
  </List>
);

export { Preview };
