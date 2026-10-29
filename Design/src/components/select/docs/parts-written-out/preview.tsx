import React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'design/components';

import type { Props } from 'design/components/select/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Select aria-label='Country' defaultValue='gb' {...props}>
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value='ca'>Canada</SelectItem>
      <SelectItem value='gb'>United Kingdom</SelectItem>
      <SelectItem value='us'>United States</SelectItem>
    </SelectContent>
  </Select>
);

export { Preview };
