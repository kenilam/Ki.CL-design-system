import React from 'react';
import * as Ri from 'react-icons/ri';

import { List, ListItem, Text } from 'design/components';

import type { Props } from 'design/components/list/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <List gap='narrow' {...props}>
      <ListItem
        alignItems='center'
        autoFlow='column'
        frames='max-content--auto'
        gap='narrow'
      >
        <Ri.RiCheckLine aria-hidden />
        <Text>Types generated</Text>
      </ListItem>
      <ListItem
        alignItems='center'
        autoFlow='column'
        frames='max-content--auto'
        gap='narrow'
      >
        <Ri.RiCheckLine aria-hidden />
        <Text>Styles bundled</Text>
      </ListItem>
    </List>
  );
};

export { Preview };
