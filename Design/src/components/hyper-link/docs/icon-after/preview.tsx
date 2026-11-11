import React from 'react';
import * as Tb from 'react-icons/tb';

import { HyperLink } from 'design/components';

import type { Props } from 'design/components/hyper-link/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <HyperLink after={<Tb.TbArrowRight aria-hidden />} to='#' {...props}>
      Next
    </HyperLink>
  );
};

export { Preview };
