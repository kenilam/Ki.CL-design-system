import React from 'react';

import { HyperLink, Navigation } from 'design/components';

import type { Props } from 'design/components/navigation/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Navigation aria-label='Components' {...props}>
    <HyperLink to='#'>Button</HyperLink>
    <HyperLink lookLikeButton size='large' to='#' variant='secondary'>
      Card
    </HyperLink>
    <HyperLink to='#'>Navigation</HyperLink>
  </Navigation>
);

export { Preview };
