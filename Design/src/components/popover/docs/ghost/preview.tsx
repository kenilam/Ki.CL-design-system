import React from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from 'design/components';

import type { Props } from 'design/components/popover/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Popover {...props}>
    <PopoverTrigger>Ghost</PopoverTrigger>
    <PopoverContent variant='ghost'>
      <Text>Press and hold to reorder.</Text>
    </PopoverContent>
  </Popover>
);

export { Preview };
