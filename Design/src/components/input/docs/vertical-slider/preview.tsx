import React from 'react';

import { RangeInput } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <RangeInput
      aria-label='Volume'
      aria-orientation='vertical'
      className='kicl-inline-size-md'
      defaultValue={50}
      {...props}
    />
  );
};

export { Preview };
