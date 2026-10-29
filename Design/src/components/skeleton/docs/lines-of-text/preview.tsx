import React from 'react';

import { Card, Skeleton } from 'design/components';

const Preview: React.FC = () => (
  <Card is='article' size={4}>
    <Skeleton />
    <Skeleton />
    <Skeleton className='kicl-inline-size-xs' />
  </Card>
);

export { Preview };
