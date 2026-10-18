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
    <PopoverTrigger>Details</PopoverTrigger>
    <PopoverContent>
      <Text>Last saved two minutes ago.</Text>
    </PopoverContent>
  </Popover>
);

export { Preview };
