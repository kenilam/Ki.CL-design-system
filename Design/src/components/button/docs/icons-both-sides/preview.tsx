import React from 'react';
import * as Ri from 'react-icons/ri';

import { Button } from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Button
    after={<Ri.RiArrowRightLine aria-hidden />}
    before={<Ri.RiSaveLine aria-hidden />}
    {...props}
  >
    Save and continue
  </Button>
);

export { Preview };
