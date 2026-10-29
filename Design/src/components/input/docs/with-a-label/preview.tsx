import React from 'react';

import { Input } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Input
      description='Shown next to your comments.'
      label='Name'
      placeholder='Your name'
      {...props}
    />
  );
};

export { Preview };
