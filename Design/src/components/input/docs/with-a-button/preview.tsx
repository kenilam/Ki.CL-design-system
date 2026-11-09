import React from 'react';
import * as Bs from 'react-icons/bs';

import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = ({ disabled, ...props }) => {
  return (
    <InputGroup disabled={disabled}>
      <InputGroupInput
        aria-label='Message'
        placeholder='Write a message'
        {...props}
      />
      <InputGroupButton aria-label='Send'>
        <Bs.BsSend aria-hidden />
      </InputGroupButton>
    </InputGroup>
  );
};

export { Preview };
