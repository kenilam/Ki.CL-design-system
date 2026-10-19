import React from 'react';

import {
  Card,
  CardDescription,
  CardTitle,
  List,
  ListItem,
} from 'design/components';

import type { Props } from 'design/components/list/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <List autoFlow='column' {...props}>
    <ListItem>
      <Card header={<CardTitle is='h3'>Components</CardTitle>} />
    </ListItem>
    <ListItem>
      <Card
        header={
          <>
            <CardTitle is='h3'>Styles</CardTitle>
            <CardDescription>Tokens, utilities and the reset.</CardDescription>
          </>
        }
      />
    </ListItem>
    <ListItem>
      <Card header={<CardTitle is='h3'>Icons</CardTitle>} />
    </ListItem>
  </List>
);

export { Preview };
