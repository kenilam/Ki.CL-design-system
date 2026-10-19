import React from 'react';

// Libraries
import classNames from 'classnames';

import type { SelectLabelProps } from 'design/components/select/spec';

/**
 * Names a SelectGroup. A base-select shows an optgroup's `<legend>` as its
 * label, styled; the group also reads the text into the native `label`
 * attribute for browsers that draw their own select.
 */
const SelectLabel: React.FunctionComponent<SelectLabelProps> = ({
  children,
  className,
  ...rest
}) => (
  <legend
    {...rest}
    className={classNames(
      'kicl-color-grey',
      'kicl-font-size-small',
      'kicl-padding-block-narrowest',
      'kicl-padding-inline',
      className
    )}
  >
    {children}
  </legend>
);

SelectLabel.displayName = 'SelectLabel';

export { SelectLabel };
