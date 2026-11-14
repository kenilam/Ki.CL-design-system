import React from 'react';

import {
  Animation,
  Button,
  Card,
  CardDescription,
  CardTitle,
  Text,
} from 'design/components';

import type { Props } from 'design/components/animation/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Animation key='card' property='fade' {...props}>
      <Card
        is='article'
        footer={<Button>Open</Button>}
        header={
          <>
            <CardTitle is='h3'>Daylight</CardTitle>
            <CardDescription>
              Where it’s day and where it’s night on Earth right now.
            </CardDescription>
          </>
        }
        size={4}
      >
        <Text>Drag the globe to turn it.</Text>
      </Card>
    </Animation>
  );
};

export { Preview };
