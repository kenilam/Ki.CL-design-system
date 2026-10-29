import React from 'react';

import { Select, SelectItem } from 'design/components';

import type { Props } from 'design/components/select/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Select aria-label='Delivery' defaultValue='standard' {...props}>
      <SelectItem value='standard'>Standard</SelectItem>
      <SelectItem disabled value='express'>
        Express
      </SelectItem>
    </Select>
  );
};

export { Preview };
