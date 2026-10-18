import React from 'react';
import classNames from 'classnames';

import type { SwitchLabelProps } from './spec';

const CLASS_NAME = 'kicl--components--switch__label';

/**
 * Visible name for {@link Switch}, nested inside it.
 */
const SwitchLabel: React.FunctionComponent<SwitchLabelProps> = ({
  children,
  className,
  ...rest
}) => (
  <span
    // The field around it sets its look, as for a checkbox or a radio.
    className={classNames(CLASS_NAME, className)}
    {...rest}
  >
    {children}
  </span>
);

SwitchLabel.displayName = 'SwitchLabel';

export { SwitchLabel };
