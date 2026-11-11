import React from 'react';

import classNames from 'classnames';

import { Skeleton } from 'design/components';

const Preview: React.FC = () => {
  return (
    <Skeleton
      className={classNames('kicl-aspect-ratio-square', 'kicl-inline-size-sm')}
    />
  );
};

export { Preview };
