import React from 'react';

import { Input } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Input
      after='kg'
      aria-label='Weight'
      placeholder='0'
      type='number'
      {...props}
    />
  );
};

export { Preview };
