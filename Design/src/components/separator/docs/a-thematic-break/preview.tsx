import React from 'react';

import { Card, Separator, Text } from 'design/components';

const Preview: React.FC = () => (
  <Card is='article' size={6}>
    <Text>The office is open on weekdays, from nine to five.</Text>
    <Separator is='hr' />
    <Text>Parking is free after six and at weekends.</Text>
  </Card>
);

export { Preview };
