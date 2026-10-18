import React from 'react';

import { Radio, RadioGroup } from 'design/components';

import type { Props } from 'design/components/radio-group/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <RadioGroup defaultValue='email' legend='Contact me by' {...props}>
    <Radio value='email'>Email</Radio>
    <Radio value='phone'>Phone</Radio>
    <Radio value='post'>Post</Radio>
  </RadioGroup>
);

export { Preview };
