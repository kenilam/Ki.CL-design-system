import React from 'react';
import * as Tb from 'react-icons/tb';

import { Button } from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Button after={<Tb.TbArrowRight aria-hidden />} {...props}>
      Next
    </Button>
  );
};

export { Preview };
