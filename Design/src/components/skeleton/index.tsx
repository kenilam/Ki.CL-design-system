import React from 'react';
import classNames from 'classnames';

import type { Props } from './spec';

import './styles.scss';

const CLASS_NAME = 'kicl--components--skeleton';

const Skeleton = React.forwardRef<HTMLDivElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        aria-hidden
        ref={ref}
        className={classNames(CLASS_NAME, className)}
        {...rest}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export type { Props as SkeletonProps } from './spec';
export { Skeleton };
