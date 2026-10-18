import React from 'react';

import { Text } from 'design/components';

import type { Props } from 'design/components/text/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Text {...props}>
    Ships on <Text is='del'>Monday</Text> <Text is='ins'>Tuesday</Text>.
  </Text>
);

export { Preview };
