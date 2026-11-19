import React from 'react';

// Icons
import * as Tb from 'react-icons/tb';

import { Popover, PopoverHint, PopoverTrigger, Text } from 'design/components';

import type { HintProps } from 'design/components/popover/docs/controls';

const Preview: React.FC<HintProps> = ({ offset, placement, ...props }) => {
  return (
    <Text>
      Sunlight takes about{' '}
      <Text is='span' lookLike='em'>
        eight minutes
      </Text>
      <Popover inline {...props}>
        <PopoverTrigger aria-label='How long exactly'>
          <Tb.TbInfoCircle aria-hidden />
        </PopoverTrigger>
        <PopoverHint offset={offset} placement={placement}>
          8 minutes and 20 seconds, on average.
        </PopoverHint>
      </Popover>{' '}
      to reach the Earth.
    </Text>
  );
};

export { Preview };
