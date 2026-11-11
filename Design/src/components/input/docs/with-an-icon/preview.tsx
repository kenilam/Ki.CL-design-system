import React from 'react';
import * as Tb from 'react-icons/tb';

import { Input } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Input
      aria-label='Search'
      before={<Tb.TbSearch aria-hidden />}
      placeholder='Search'
      {...props}
    />
  );
};

export { Preview };
