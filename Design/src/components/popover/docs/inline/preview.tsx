import React from 'react';

// Icons
import * as Ri from 'react-icons/ri';

import { Popover, PopoverHint, PopoverTrigger, Text } from 'design/components';

import type { Props } from 'design/components/popover/docs/controls';

const Preview: React.FC<Props> = ({ offset, placement, variant, ...props }) => (
  <Text>
    Sunlight takes about{' '}
    <Text is='span' lookLike='em'>
      eight minutes
    </Text>
    <Popover inline {...props}>
      <PopoverTrigger aria-label='How long exactly'>
        <Ri.RiInformationLine aria-hidden />
      </PopoverTrigger>
      <PopoverHint offset={offset} placement={placement} variant={variant}>
        8 minutes and 20 seconds, on average.
      </PopoverHint>
    </Popover>{' '}
    to reach the Earth.
  </Text>
);

export { Preview };
