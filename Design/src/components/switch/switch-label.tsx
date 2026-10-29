import React from 'react';
import classNames from 'classnames';

import type { SwitchLabelProps } from './spec';

const CLASS_NAME = 'kicl--components--switch__label';

const SwitchLabel: React.FunctionComponent<SwitchLabelProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <span className={classNames(CLASS_NAME, className)} {...rest}>
      {children}
    </span>
  );
};

SwitchLabel.displayName = 'SwitchLabel';

export { SwitchLabel };
