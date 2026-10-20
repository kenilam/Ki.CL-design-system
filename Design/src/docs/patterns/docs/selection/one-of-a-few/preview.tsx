import React, { useState } from 'react';

import { Card, CardTitle, Radio, RadioGroup, Text } from 'design/components';

const SIZES = { large: 11, medium: 8.5, small: 6 };

const Preview: React.FC = () => {
  const [size, setSize] = useState<keyof typeof SIZES>('medium');

  return (
    <Card header={<CardTitle is='h3'>Flat white</CardTitle>} size={4}>
      <RadioGroup
        legend='Size'
        name='size'
        onValueChange={(value) => setSize(value as keyof typeof SIZES)}
        value={size}
      >
        <Radio value='small'>Small</Radio>
        <Radio value='medium'>Medium</Radio>
        <Radio value='large'>Large</Radio>
      </RadioGroup>
      <Text className='kicl-font-weight-bold' role='status'>
        ${SIZES[size].toFixed(2)}
      </Text>
    </Card>
  );
};

export { Preview };
