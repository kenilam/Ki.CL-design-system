import React from 'react';
import * as Tb from 'react-icons/tb';

import { Button } from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Button aria-label='Close' variant='ghost' {...props}>
      <Tb.TbX aria-hidden />
    </Button>
  );
};

export { Preview };
