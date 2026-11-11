import React from 'react';

import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from 'design/components';

import * as Tb from 'react-icons/tb';

import type { Props } from 'design/components/input-group/docs/controls';

const Preview: React.FC<Props> = ({ disabled, ...props }) => {
  return (
    <InputGroup disabled={disabled}>
      <Tb.TbSearch aria-hidden />
      <InputGroupInput
        aria-label='Search'
        placeholder='Search the docs'
        {...props}
      />
      <InputGroupButton aria-label='Clear'>
        <Tb.TbX aria-hidden />
      </InputGroupButton>
    </InputGroup>
  );
};

export { Preview };
