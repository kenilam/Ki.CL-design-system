import React from 'react';

import { Separator, Text } from 'design/components';

import type { Props } from 'design/components/separator/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <>
    <Text>The end of one topic.</Text>
    <Separator decorative={false} {...props} />
    <Text>The start of the next.</Text>
  </>
);

export { Preview };
