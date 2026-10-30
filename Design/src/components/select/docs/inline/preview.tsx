import React from 'react';

import { Select, SelectItem, Text } from 'design/components';

import type { Props } from 'design/components/select/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Text>
      Show prices in{' '}
      <Select aria-label='Currency' inline {...props}>
        <SelectItem value='cad'>Canadian dollars</SelectItem>
        <SelectItem value='gbp'>British pounds</SelectItem>
        <SelectItem value='usd'>US dollars</SelectItem>
      </Select>
      .
    </Text>
  );
};

export { Preview };
