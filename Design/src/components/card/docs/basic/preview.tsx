import React from 'react';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  Text,
} from 'design/components';

import type { Props } from 'design/components/card/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card
    footer={<Button>Open</Button>}
    header={
      <>
        <CardTitle is='h3'>Daylight</CardTitle>
        <CardDescription>
          The Earth lit by where the sun is now.
        </CardDescription>
      </>
    }
    size={4}
    {...props}
  >
    <CardContent>
      <Text>Drag the globe to turn it.</Text>
    </CardContent>
  </Card>
);

export { Preview };
