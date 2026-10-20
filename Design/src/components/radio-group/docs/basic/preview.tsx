import React from 'react';

import { Radio, RadioGroup } from 'design/components';

import type { Props } from 'design/components/radio-group/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <RadioGroup legend='Billing' {...props}>
    <Radio value='monthly'>Monthly</Radio>
    <Radio value='yearly'>Yearly</Radio>
  </RadioGroup>
);

export { Preview };
