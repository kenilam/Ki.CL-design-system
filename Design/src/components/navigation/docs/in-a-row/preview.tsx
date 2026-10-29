import React from 'react';

import { HyperLink, Navigation } from 'design/components';

import type { Props } from 'design/components/navigation/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Navigation aria-label='Components' autoFlow='column' {...props}>
      <HyperLink to='#'>Button</HyperLink>
      <HyperLink to='#'>Card</HyperLink>
      <HyperLink to='#'>Navigation</HyperLink>
    </Navigation>
  );
};

export { Preview };
