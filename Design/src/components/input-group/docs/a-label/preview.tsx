import React from 'react';

import { InputGroup, InputGroupInput } from 'design/components';

import * as Ri from 'react-icons/ri';

import type { Props } from 'design/components/input-group/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <InputGroup is='label'>
    <Ri.RiLinkM aria-hidden />
    https://
    <InputGroupInput
      aria-label='Website'
      placeholder='example.com'
      {...props}
    />
  </InputGroup>
);

export { Preview };
