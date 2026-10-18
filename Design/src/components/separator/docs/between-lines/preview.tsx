import React from 'react';

import { Separator, Text } from 'design/components';

import type { Props } from 'design/components/separator/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Text>Above</Text>
    <Separator {...props} />
    <Text>Below</Text>
  </>
);

export { Preview };
