import React from 'react';

// Libraries
import classNames from 'classnames';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as SELECT } from 'design/components/select/constants';

import type { SelectItemProps } from 'design/components/select/spec';

const CLASS_NAME = `${SELECT}__item`;

const SelectItem = React.forwardRef<HTMLOptionElement, SelectItemProps>(
  ({ className, ...rest }, ref) => (
    <option
      ref={ref}
      className={classNames(
        CLASS_NAME,
        'kicl-border-radius-sm',
        'kicl-padding-block-narrow',
        'kicl-padding-inline',
        className
      )}
      {...rest}
    />
  )
);

SelectItem.displayName = 'SelectItem';

export { SelectItem };
