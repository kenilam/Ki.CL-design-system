import React from 'react';

import { HyperLink, Navigation } from 'design/components';

import type { Props } from 'design/components/navigation/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Navigation aria-label='Steps' is='ol' {...props}>
    <HyperLink to='#'>Form</HyperLink>
    <HyperLink to='#'>Input</HyperLink>
    <HyperLink to='#'>Button</HyperLink>
  </Navigation>
);

export { Preview };
