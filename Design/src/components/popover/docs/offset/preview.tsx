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
    <PopoverTrigger>Further away</PopoverTrigger>
    <PopoverContent offset='wide'>
      <Text>Changes sync when you are back online.</Text>
    </PopoverContent>
  </Popover>
);

export { Preview };
