import React from 'react';
import * as Ri from 'react-icons/ri';

import { HyperLink } from 'design/components';

import type { Props } from 'design/components/hyper-link/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <HyperLink after={<Ri.RiArrowRightLine aria-hidden />} to='#' {...props}>
    Next
  </HyperLink>
);

export { Preview };
