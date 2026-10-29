import React from 'react';

import {
  InputGroup,
  InputGroupButton,
  InputGroupTextarea,
} from 'design/components';

import * as Ri from 'react-icons/ri';

import type { Props } from 'design/components/input-group/docs/controls';

const Preview: React.FC<Props> = ({ disabled, ...props }) => (
  <InputGroup disabled={disabled}>
    <InputGroupTextarea
      aria-label='Message'
      placeholder='Write a message'
      rows={1}
      {...props}
    />
    <InputGroupButton aria-label='Send' type='submit'>
      <Ri.RiSendPlaneLine aria-hidden />
    </InputGroupButton>
  </InputGroup>
);

export { Preview };
