import React from 'react';

import {
  HyperLink,
  Popover,
  PopoverHint,
  PopoverTrigger,
} from 'design/components';

import type { Props } from 'design/components/popover/docs/controls';

const Preview: React.FC<Props> = ({ offset, placement, variant, ...props }) => (
  <Popover {...props}>
    <PopoverTrigger asChild>
      <HyperLink to='#delivery'>Delivery</HyperLink>
    </PopoverTrigger>
    <PopoverHint offset={offset} placement={placement} variant={variant}>
      Free over £50, in two to three days.
    </PopoverHint>
  </Popover>
);

export { Preview };
