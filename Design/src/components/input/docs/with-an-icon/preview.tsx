import React from 'react';
import * as Bs from 'react-icons/bs';

import { Input } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Input
      aria-label='Search'
      before={<Bs.BsSearch aria-hidden />}
      placeholder='Search'
      {...props}
    />
  );
};

export { Preview };
