import React from 'react';

import { List, ListItem } from 'design/components';

import type { Props } from 'design/components/list/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <List is='ol' listStyleType='decimal' {...props}>
      <ListItem>Install the remote</ListItem>
      <ListItem>Import the core styles</ListItem>
      <ListItem>Use a component</ListItem>
    </List>
  );
};

export { Preview };
