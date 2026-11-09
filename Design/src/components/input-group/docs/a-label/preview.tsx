import React from 'react';

import { InputGroup, InputGroupInput } from 'design/components';

import * as Bs from 'react-icons/bs';

import type { Props } from 'design/components/input-group/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <InputGroup is='label'>
      <Bs.BsLink45Deg aria-hidden />
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
