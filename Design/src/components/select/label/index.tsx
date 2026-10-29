import React from 'react';

// Libraries
import classNames from 'classnames';

import type { SelectLabelProps } from 'design/components/select/spec';

const SelectLabel: React.FunctionComponent<SelectLabelProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <legend
      {...rest}
      className={classNames(
        'kicl-color-grey',
        'kicl-font-size-small',
        'kicl-padding-block-start-narrow',
        'kicl-padding-block-end-narrowest',
        'kicl-padding-inline',
        className
      )}
    >
      {children}
    </legend>
  );
};

SelectLabel.displayName = 'SelectLabel';

export { SelectLabel };
