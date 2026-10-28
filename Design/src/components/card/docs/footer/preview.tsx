import React from 'react';

import { Button, Card, CardFooter, Text } from 'design/components';

import type { Props } from 'design/components/card/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card is='section' size={4} {...props}>
    <Text>Discard the draft?</Text>
    <CardFooter justifyContent='end'>
      <Button variant='tertiary'>Cancel</Button>
      <Button level='error'>Discard</Button>
    </CardFooter>
  </Card>
);

export { Preview };
