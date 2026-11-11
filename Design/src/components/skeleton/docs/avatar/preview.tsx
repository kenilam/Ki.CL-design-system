import React from 'react';

import classNames from 'classnames';

import { Skeleton } from 'design/components';

const Preview: React.FC = () => {
  return (
    <Skeleton
      className={classNames(
        'kicl-aspect-ratio-square',
        'kicl-border-radius-full',
        'kicl-inline-size-xs'
      )}
    />
  );
};

export { Preview };
