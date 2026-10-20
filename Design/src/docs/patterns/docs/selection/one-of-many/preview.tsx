import React, { useState } from 'react';

import { Card, CardTitle, Select, SelectItem, Text } from 'design/components';

const DAYS: Record<string, string> = {
  ca: '5 to 7',
  gb: '2 to 3',
  hk: '7 to 10',
  us: '4 to 6',
};

const Preview: React.FC = () => {
  const [country, setCountry] = useState('gb');

  return (
    <Card header={<CardTitle is='h3'>Delivery</CardTitle>} size={4}>
      <Select aria-label='Country' onValueChange={setCountry} value={country}>
        <SelectItem value='ca'>Canada</SelectItem>
        <SelectItem value='gb'>United Kingdom</SelectItem>
        <SelectItem value='hk'>Hong Kong</SelectItem>
        <SelectItem value='us'>United States</SelectItem>
      </Select>
      <Text role='status'>Arrives in {DAYS[country]} working days.</Text>
    </Card>
  );
};

export { Preview };
