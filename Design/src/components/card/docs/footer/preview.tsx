import React from 'react';

import { Button, Card, CardContent, CardFooter, Text } from 'design/components';

import type { Props } from 'design/components/card/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card size={4} {...props}>
    <CardContent>
      <Text>Discard the draft?</Text>
    </CardContent>
    <CardFooter justifyContent='end'>
      <Button variant='tertiary'>Cancel</Button>
      <Button level='error'>Discard</Button>
    </CardFooter>
  </Card>
);

export { Preview };
