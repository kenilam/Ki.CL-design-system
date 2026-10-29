import React from 'react';

import { Radio, RadioGroup } from 'design/components';

import type { Props } from 'design/components/radio-group/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <RadioGroup defaultValue='standard' legend='Delivery' {...props}>
      <Radio value='standard'>Standard</Radio>
      <Radio disabled value='express'>
        Express
      </Radio>
    </RadioGroup>
  );
};

export { Preview };
