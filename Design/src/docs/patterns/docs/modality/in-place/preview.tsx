import React from 'react';

import { Card, CardTitle, Details, Text } from 'design/components';

const Preview: React.FC = () => {
  return (
    <Card
      is='section'
      header={<CardTitle is='h3'>Questions</CardTitle>}
      size={5}
    >
      <Details summary='Can I change my order?'>
        <Text>
          Yes, until it leaves the kitchen. Open the order and choose Edit.
        </Text>
      </Details>
      <Details summary='Where is my delivery?'>
        <Text>
          The order page shows where it is, and we text you when it's close.
        </Text>
      </Details>
      <Details summary='How do refunds work?'>
        <Text>
          Refunds go back to the card you paid with, within five working days.
        </Text>
      </Details>
    </Card>
  );
};

export { Preview };
