import React from 'react';

import { Details, Text } from 'design/components';

import type { Props } from 'design/components/details/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Details summary='What does it cost?' {...props}>
    <Text>Nothing. It is free to use.</Text>
  </Details>
);

export { Preview };
