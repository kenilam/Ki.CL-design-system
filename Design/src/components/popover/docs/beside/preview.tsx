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
    <PopoverTrigger>Beside</PopoverTrigger>
    <PopoverContent placement='inline-end-center'>
      <Text>Added to the shared folder.</Text>
    </PopoverContent>
  </Popover>
);

export { Preview };
