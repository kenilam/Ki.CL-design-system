import React from 'react';

import { Text } from 'design/components';

import type { Props } from 'design/components/text/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Text {...props}>
    Each page shows a component live, with presets to switch between.
  </Text>
);

export { Preview };
