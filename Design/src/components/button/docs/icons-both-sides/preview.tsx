import React from 'react';
import * as Bs from 'react-icons/bs';

import { Button } from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Button
      after={<Bs.BsArrowRight aria-hidden />}
      before={<Bs.BsFloppy aria-hidden />}
      {...props}
    >
      Save and continue
    </Button>
  );
};

export { Preview };
