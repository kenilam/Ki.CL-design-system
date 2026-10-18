import React from 'react';

import { Popover, PopoverHint, PopoverTrigger, Text } from 'design/components';

import type { Props } from 'design/components/popover/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Text>
    Sunlight takes about{' '}
    <Popover inline {...props}>
      <PopoverTrigger>eight minutes</PopoverTrigger>
      <PopoverHint>8 minutes and 20 seconds, on average.</PopoverHint>
    </Popover>{' '}
    to reach the Earth.
  </Text>
);

export { Preview };
