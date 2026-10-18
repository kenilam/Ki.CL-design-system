import React from 'react';

import { Card, Details, Text } from 'design/components';

import type { Props } from 'design/components/details/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card size='max'>
    <Details gap='narrow' open summary='How do I cancel?' {...props}>
      <Text>Open Settings and choose Plan.</Text>
      <Text>Pick Cancel at the bottom of the page.</Text>
      <Text>Your plan runs until the end of the month.</Text>
    </Details>
  </Card>
);

export { Preview };
