import React from 'react';

import { Card, CardDescription, CardTitle, List } from 'design/components';

import type { Props } from 'design/components/list/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <List autoFlow='column' {...props}>
      <Card is='li' header={<CardTitle is='h3'>Components</CardTitle>} />
      <Card
        is='li'
        header={
          <>
            <CardTitle is='h3'>Styles</CardTitle>
            <CardDescription>Tokens, utilities and the reset.</CardDescription>
          </>
        }
      />
      <Card is='li' header={<CardTitle is='h3'>Icons</CardTitle>} />
    </List>
  );
};

export { Preview };
