import React from 'react';
import * as Ri from 'react-icons/ri';

import { Button } from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Button aria-label='Close' variant='ghost' {...props}>
      <Ri.RiCloseLine aria-hidden />
    </Button>
  );
};

export { Preview };
