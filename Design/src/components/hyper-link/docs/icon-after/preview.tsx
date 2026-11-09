import React from 'react';
import * as Bs from 'react-icons/bs';

import { HyperLink } from 'design/components';

import type { Props } from 'design/components/hyper-link/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <HyperLink after={<Bs.BsArrowRight aria-hidden />} to='#' {...props}>
      Next
    </HyperLink>
  );
};

export { Preview };
