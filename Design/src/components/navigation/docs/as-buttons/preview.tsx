import React from 'react';

import { HyperLink, Navigation } from 'design/components';

import type { Props } from 'design/components/navigation/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Navigation aria-label='Components' autoFlow='column' gap='narrow' {...props}>
    <HyperLink lookLikeButton to='#' variant='secondary'>
      Button
    </HyperLink>
    <HyperLink lookLikeButton to='#' variant='secondary'>
      Card
    </HyperLink>
    <HyperLink lookLikeButton to='#' variant='secondary'>
      Navigation
    </HyperLink>
  </Navigation>
);

export { Preview };
