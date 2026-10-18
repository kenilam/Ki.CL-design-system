import React from 'react';

import { Layout, Skeleton } from 'design/components';

const Preview: React.FC = () => (
  <Layout alignItems='center' autoFlow='column'>
    <div>
      <Skeleton className='kicl-aspect-ratio-square kicl-border-radius-full kicl-inline-size-xs' />
      <Skeleton className='kicl-aspect-ratio-video kicl-inline-size-md' />
    </div>
  </Layout>
);

export { Preview };
