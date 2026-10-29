import React from 'react';
import * as Ri from 'react-icons/ri';

import { Button } from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Button before={<Ri.RiHeartLine aria-hidden />} {...props}>
      Favourite
    </Button>
  );
};

export { Preview };
