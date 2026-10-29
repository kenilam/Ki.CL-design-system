import React from 'react';

// Libraries
import classNames from 'classnames';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as SELECT } from 'design/components/select/constants';

import type { SelectSeparatorProps } from 'design/components/select/spec';

const CLASS_NAME = `${SELECT}__separator`;

/** Browsers without base-select skip the `<hr>`. */
const SelectSeparator = React.forwardRef<HTMLHRElement, SelectSeparatorProps>(
  ({ className, ...rest }, ref) => {
    return (
      <hr
        ref={ref}
        className={classNames(
          CLASS_NAME,
          'kicl-margin-block-narrower',
          className
        )}
        {...rest}
      />
    );
  }
);

SelectSeparator.displayName = 'SelectSeparator';

export { SelectSeparator };
