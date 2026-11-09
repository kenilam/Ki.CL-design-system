import React from 'react';
import * as Bs from 'react-icons/bs';

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from 'design/components';

import type { Props } from 'design/components/popover/docs/controls';

const Preview: React.FC<Props> = ({ offset, placement, variant, ...props }) => {
  return (
    <Popover {...props}>
      <PopoverTrigger asChild>
        <Button after={<Bs.BsChevronDown aria-hidden />} variant='secondary'>
          Options
        </Button>
      </PopoverTrigger>
      <PopoverContent offset={offset} placement={placement} variant={variant}>
        <Text>Export, duplicate or archive this board.</Text>
      </PopoverContent>
    </Popover>
  );
};

export { Preview };
