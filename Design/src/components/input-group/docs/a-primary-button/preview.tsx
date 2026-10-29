import React from 'react';

import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from 'design/components';

import type { Props } from 'design/components/input-group/docs/controls';

const Preview: React.FC<Props> = ({ disabled, ...props }) => {
  return (
    <InputGroup disabled={disabled}>
      <InputGroupInput
        aria-label='Message'
        placeholder='Write a message'
        {...props}
      />
      <InputGroupButton type='submit' variant='primary'>
        Send
      </InputGroupButton>
    </InputGroup>
  );
};

export { Preview };
