import React from 'react';
import classNames from 'classnames';

import type { BadgeLabelProps } from './spec';

const CLASS_NAME = 'kicl--components--badge__label';

const BadgeLabel: React.FunctionComponent<BadgeLabelProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <span
      className={classNames(CLASS_NAME, 'kicl-font-weight', className)}
      {...rest}
    >
      {children}
    </span>
  );
};

BadgeLabel.displayName = 'BadgeLabel';

export { BadgeLabel };
