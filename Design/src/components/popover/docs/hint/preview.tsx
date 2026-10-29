import React from 'react';

import { Badge, Popover, PopoverHint, PopoverTrigger } from 'design/components';

import type { Props } from 'design/components/popover/docs/controls';

const Preview: React.FC<Props> = ({ offset, placement, variant, ...props }) => {
  return (
    <Popover {...props}>
      <PopoverTrigger>
        <Badge variant='secondary' size='large'>
          Hover me
        </Badge>
      </PopoverTrigger>
      <PopoverHint offset={offset} placement={placement} variant={variant}>
        Shown while this is hovered or focused.
      </PopoverHint>
    </Popover>
  );
};

export { Preview };
