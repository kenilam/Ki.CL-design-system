import React from 'react';

import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from 'design/components';

import type { Props } from 'design/components/select/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Select aria-label='City' placeholder='Pick a city' {...props}>
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value='london'>London</SelectItem>
      <SelectItem value='paris'>Paris</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value='toronto'>Toronto</SelectItem>
      <SelectItem value='vancouver'>Vancouver</SelectItem>
    </SelectGroup>
  </Select>
);

export { Preview };
