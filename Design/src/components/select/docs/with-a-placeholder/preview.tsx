import React from 'react';

import { Select, SelectItem } from 'design/components';

import type { Props } from 'design/components/select/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Select aria-label='Country' placeholder='Pick a country' {...props}>
    <SelectItem value='ca'>Canada</SelectItem>
    <SelectItem value='gb'>United Kingdom</SelectItem>
    <SelectItem value='us'>United States</SelectItem>
  </Select>
);

export { Preview };
