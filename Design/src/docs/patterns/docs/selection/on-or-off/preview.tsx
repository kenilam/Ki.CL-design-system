import React, { useState } from 'react';

import { Card, CardTitle, Switch, Text } from 'design/components';

const Preview: React.FC = () => {
  const [on, setOn] = useState(true);

  return (
    <Card
      is='section'
      header={<CardTitle is='h3'>Order updates</CardTitle>}
      size={4}
    >
      <Switch checked={on} onCheckedChange={setOn}>
        Text me about my order
      </Switch>
      <Text role='status' variant='secondary'>
        {on
          ? "We'll text you when it's on its way."
          : "You won't get texts. The order page still shows where it is."}
      </Text>
    </Card>
  );
};

export { Preview };
