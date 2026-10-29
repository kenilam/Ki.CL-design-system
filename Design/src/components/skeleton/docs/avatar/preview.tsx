import React from 'react';

import { Skeleton } from 'design/components';

const Preview: React.FC = () => {
  return (
    <Skeleton className='kicl-aspect-ratio-square kicl-border-radius-full kicl-inline-size-xs' />
  );
};

export { Preview };
