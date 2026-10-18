import React from 'react';

import { Popover, PopoverHint, PopoverTrigger } from 'design/components';

import type { Props } from 'design/components/popover/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Popover {...props}>
    <PopoverTrigger>Hover me</PopoverTrigger>
    <PopoverHint>Copied to the clipboard.</PopoverHint>
  </Popover>
);

export { Preview };
