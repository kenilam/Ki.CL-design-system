import React from 'react';

import { Card, Details, HyperLink, Navigation } from 'design/components';

import type { Props } from 'design/components/navigation/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card is='aside' size='fit'>
    <Navigation aria-label='Components' {...props}>
      <HyperLink to='#'>Button</HyperLink>
      <Details summary='Navigation'>
        <Navigation
          aria-label='Navigation'
          className='kicl-padding-inline-start-narrow'
        >
          <HyperLink to='#'>Button</HyperLink>
          <HyperLink to='#'>Navigation</HyperLink>
        </Navigation>
      </Details>
    </Navigation>
  </Card>
);

export { Preview };
