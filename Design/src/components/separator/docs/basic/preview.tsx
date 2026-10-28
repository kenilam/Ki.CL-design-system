import React from 'react';

import { Card, CardTitle, Separator, Text } from 'design/components';

const Preview: React.FC = () => (
  <Card is='article' size={4}>
    <CardTitle is='h3'>Release 4.2</CardTitle>
    <Text>Search across every component, and a menu that stays open.</Text>
    <Separator />
    <Text>Shipped 19 October 2026</Text>
  </Card>
);

export { Preview };
