import React from 'react';

// Libraries
import classNames from 'classnames';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as SELECT } from 'design/components/select/constants';

import type { SelectValueProps } from 'design/components/select/spec';

const CLASS_NAME = `${SELECT}__value`;

/**
 * `<selectedcontent>` copies the chosen option into the trigger. The
 * placeholder is an option too, so it goes on Select.
 */
const SelectValue: React.FunctionComponent<SelectValueProps> = ({
  className,
  ...rest
}) =>
  React.createElement('selectedcontent', {
    className: classNames(
      CLASS_NAME,
      'kicl-overflow-hidden',
      'kicl-text-nowrap',
      className
    ),
    ...rest,
  });

SelectValue.displayName = 'SelectValue';

export { SelectValue };
