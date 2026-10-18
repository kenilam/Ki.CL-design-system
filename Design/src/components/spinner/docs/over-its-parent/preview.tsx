import React from 'react';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Spinner,
  Text,
} from 'design/components';

import type { Props } from 'design/components/spinner/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card size={6}>
    <CardHeader>
      <CardTitle is='h3'>Trip to Lisbon</CardTitle>
      <CardDescription>
        Three days in May, with the photos from the old town.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Text>
        Forty-two photos, two videos and a map of every place you stopped.
      </Text>
    </CardContent>
    <CardFooter>
      <Button>Open</Button>
    </CardFooter>
    <Spinner in {...props} />
  </Card>
);

export { Preview };
