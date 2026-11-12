import React from 'react';

import { Heading, Separator } from 'design/components';

const Preview: React.FC = () => {
  return (
    <header>
      <Separator className='kicl-inline-size-xs' variant='gradient' />
      <Heading is='h2'>Experience</Heading>
    </header>
  );
};

export { Preview };
