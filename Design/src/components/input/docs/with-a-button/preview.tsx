import React from 'react';
import * as Ri from 'react-icons/ri';

import { Input, InputGroupButton } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Input
    after={
      <InputGroupButton aria-label='Send'>
        <Ri.RiSendPlaneLine aria-hidden />
      </InputGroupButton>
    }
    aria-label='Message'
    placeholder='Write a message'
    {...props}
  />
);

export { Preview };
