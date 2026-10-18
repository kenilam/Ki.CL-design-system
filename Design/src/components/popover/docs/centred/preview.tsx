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
    <PopoverTrigger>Centred</PopoverTrigger>
    <PopoverContent placement='block-end-center'>
      <Text>Three people are editing.</Text>
    </PopoverContent>
  </Popover>
);

export { Preview };
