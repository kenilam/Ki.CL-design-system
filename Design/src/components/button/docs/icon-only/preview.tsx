import React from 'react';
import * as Bs from 'react-icons/bs';

import { Button } from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Button aria-label='Close' variant='ghost' {...props}>
      <Bs.BsXLg aria-hidden />
    </Button>
  );
};

export { Preview };
