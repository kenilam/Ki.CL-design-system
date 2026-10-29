import React from 'react';

import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from 'design/components';

import * as Ri from 'react-icons/ri';

import type { Props } from 'design/components/input-group/docs/controls';

const Preview: React.FC<Props> = ({ disabled, ...props }) => (
  <InputGroup disabled={disabled}>
    <Ri.RiSearchLine aria-hidden />
    <InputGroupInput
      aria-label='Search'
      placeholder='Search the docs'
      {...props}
    />
    <InputGroupButton aria-label='Clear'>
      <Ri.RiCloseLine aria-hidden />
    </InputGroupButton>
  </InputGroup>
);

export { Preview };
