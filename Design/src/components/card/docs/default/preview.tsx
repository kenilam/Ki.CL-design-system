import React from 'react';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Text,
} from 'design/components';

import type { Props } from 'design/components/card/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card size={4} {...props}>
    <CardHeader>
      <CardTitle is='h3'>Daylight</CardTitle>
      <CardDescription>The Earth lit by where the sun is now.</CardDescription>
    </CardHeader>
    <CardContent>
      <Text>Drag the globe to turn it.</Text>
    </CardContent>
    <CardFooter>
      <Button>Open</Button>
    </CardFooter>
  </Card>
);

export { Preview };
