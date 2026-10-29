import React from 'react';

import { HyperLink } from 'design/components';

import type { ButtonLookProps as Props } from 'design/components/hyper-link/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <HyperLink lookLikeButton to='#' {...props}>
      Read the resume
    </HyperLink>
  );
};

export { Preview };
