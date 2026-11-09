import React from 'react';
import * as Bs from 'react-icons/bs';

import { Button } from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Button before={<Bs.BsHeart aria-hidden />} {...props}>
      Favourite
    </Button>
  );
};

export { Preview };
