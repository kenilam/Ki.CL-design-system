import React from 'react';

import { Select, SelectItem } from 'design/components';

import type { Props } from 'design/components/select/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Select aria-label='Language' defaultValue='en-US' {...props}>
      <SelectItem value='en-US'>English</SelectItem>
      <SelectItem aria-busy disabled value='fr'>
        Français
      </SelectItem>
    </Select>
  );
};

export { Preview };
