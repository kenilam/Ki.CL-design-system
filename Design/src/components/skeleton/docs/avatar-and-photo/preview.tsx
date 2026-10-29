import React from 'react';

import { List, ListItem, Skeleton } from 'design/components';

const Preview: React.FC = () => {
  return (
    <List alignItems='center' autoFlow='column'>
      <ListItem>
        <Skeleton className='kicl-aspect-ratio-square kicl-border-radius-full kicl-inline-size-xs' />
      </ListItem>
      <ListItem>
        <Skeleton className='kicl-aspect-ratio-video kicl-inline-size-md' />
      </ListItem>
    </List>
  );
};

export { Preview };
