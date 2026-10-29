import React from 'react';

import { HyperLink, Navigation } from 'design/components';

import type { Props } from 'design/components/navigation/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Navigation aria-label='Components' {...props}>
      <HyperLink to='#'>Menu</HyperLink>
      <HyperLink to='.'>Navigation</HyperLink>
      <HyperLink to='#'>Page indicator</HyperLink>
    </Navigation>
  );
};

export { Preview };
