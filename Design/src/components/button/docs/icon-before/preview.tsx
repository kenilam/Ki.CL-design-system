import React from 'react';
import * as Tb from 'react-icons/tb';

import { Button } from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Button before={<Tb.TbHeart aria-hidden />} {...props}>
      Favourite
    </Button>
  );
};

export { Preview };
