import React from 'react';

import { Card, Details, Text } from 'design/components';

import type { Props } from 'design/components/details/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Card is='section' size='max'>
      <Details summary='What does it cost?' {...props}>
        <Text>Nothing. It is free to use.</Text>
      </Details>
    </Card>
  );
};

export { Preview };
