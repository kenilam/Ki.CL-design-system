import React from 'react';

import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from 'design/components';

import * as Bs from 'react-icons/bs';

import type { Props } from 'design/components/input-group/docs/controls';

const Preview: React.FC<Props> = ({ disabled, ...props }) => {
  return (
    <InputGroup disabled={disabled}>
      <Bs.BsSearch aria-hidden />
      <InputGroupInput
        aria-label='Search'
        placeholder='Search the docs'
        {...props}
      />
      <InputGroupButton aria-label='Clear'>
        <Bs.BsXLg aria-hidden />
      </InputGroupButton>
    </InputGroup>
  );
};

export { Preview };
