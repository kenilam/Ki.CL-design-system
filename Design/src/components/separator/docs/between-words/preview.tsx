import React from 'react';

import { Separator, Text } from 'design/components';

import type { Props } from 'design/components/separator/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Text>Left</Text>
    <Separator orientation='vertical' {...props} />
    <Text>Right</Text>
  </>
);

export { Preview };
