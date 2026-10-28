import React, { useState } from 'react';

import {
  Card,
  CardTitle,
  Checkbox,
  CheckboxGroup,
  Text,
} from 'design/components';

const Preview: React.FC = () => {
  const [toppings, setToppings] = useState<string[]>(['basil']);

  return (
    <Card
      is='section'
      header={<CardTitle is='h3'>Margherita</CardTitle>}
      size={4}
    >
      <CheckboxGroup
        legend='Add toppings, $1.20 each'
        name='toppings'
        onValueChange={setToppings}
        value={toppings}
      >
        <Checkbox value='basil'>Basil</Checkbox>
        <Checkbox value='olives'>Olives</Checkbox>
        <Checkbox value='chilli'>Chilli</Checkbox>
        <Checkbox value='mushroom'>Mushroom</Checkbox>
      </CheckboxGroup>
      <Text role='status'>
        {toppings.length
          ? `${toppings.length} added, +$${(toppings.length * 1.2).toFixed(2)}`
          : 'No toppings'}
      </Text>
    </Card>
  );
};

export { Preview };
