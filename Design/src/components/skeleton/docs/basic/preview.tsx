import React from 'react';

import classNames from 'classnames';

import { Skeleton } from 'design/components';

const Preview: React.FC = () => {
  return (
    <Skeleton
      className={classNames('kicl-aspect-ratio-video', 'kicl-inline-size-lg')}
    />
  );
};

export { Preview };
