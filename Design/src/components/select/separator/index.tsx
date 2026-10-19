import React from 'react';

// Libraries
import classNames from 'classnames';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as SELECT } from 'design/components/select/constants';

import type { SelectSeparatorProps } from 'design/components/select/spec';

const CLASS_NAME = `${SELECT}__separator`;

/** An `<hr>` between options; browsers without base-select skip it. */
const SelectSeparator = React.forwardRef<HTMLHRElement, SelectSeparatorProps>(
  ({ className, ...rest }, ref) => (
    <hr
      ref={ref}
      className={classNames(
        CLASS_NAME,
        'kicl-margin-block-narrower',
        className
      )}
      {...rest}
    />
  )
);

SelectSeparator.displayName = 'SelectSeparator';

export { SelectSeparator };
