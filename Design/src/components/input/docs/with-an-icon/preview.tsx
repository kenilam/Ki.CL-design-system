import React from 'react';
import * as Ri from 'react-icons/ri';

import { Input } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Input
    aria-label='Search'
    before={<Ri.RiSearchLine aria-hidden />}
    placeholder='Search'
    {...props}
  />
);

export { Preview };
