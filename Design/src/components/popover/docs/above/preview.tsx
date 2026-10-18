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
    <PopoverTrigger>Above</PopoverTrigger>
    <PopoverContent placement='block-start'>
      <Text>Saved to your drafts.</Text>
    </PopoverContent>
  </Popover>
);

export { Preview };
