import React from 'react';

import { Badge, Popover, PopoverHint, PopoverTrigger } from 'design/components';

import type { HintProps } from 'design/components/popover/docs/controls';

const Preview: React.FC<HintProps> = ({ offset, placement, ...props }) => {
  return (
    <Popover {...props}>
      <PopoverTrigger>
        <Badge variant='secondary' size='large'>
          Hover me
        </Badge>
      </PopoverTrigger>
      <PopoverHint offset={offset} placement={placement}>
        Shown while this is hovered or focused.
      </PopoverHint>
    </Popover>
  );
};

export { Preview };
