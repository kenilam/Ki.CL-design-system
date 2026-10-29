import React from 'react';
import * as Ri from 'react-icons/ri';

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
        <Ri.RiSendPlaneLine aria-hidden />
      </InputGroupButton>
    </InputGroup>
  );
};

export { Preview };
