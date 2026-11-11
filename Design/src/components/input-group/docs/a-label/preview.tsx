import React from 'react';

import { InputGroup, InputGroupInput } from 'design/components';

import * as Tb from 'react-icons/tb';

import type { Props } from 'design/components/input-group/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <InputGroup is='label'>
      <Tb.TbLink aria-hidden />
      https://
      <InputGroupInput
        aria-label='Website'
        placeholder='example.com'
        {...props}
      />
    </InputGroup>
  );
};

export { Preview };
