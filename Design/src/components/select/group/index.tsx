import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { CLASS_NAME as SELECT } from 'design/components/select/constants';

// Partials
import { SelectLabel } from 'design/components/select/label';

import type { SelectGroupProps } from 'design/components/select/spec';

const CLASS_NAME = `${SELECT}__group`;

const isLabel = (
  child: React.ReactNode
): child is React.ReactElement<React.ComponentProps<typeof SelectLabel>> => {
  return React.isValidElement(child) && child.type === SelectLabel;
};

/**
 * A base-select shows the SelectLabel `<legend>`; a browser drawing its own
 * select shows the `label` attribute instead, so both get the text.
 */
const SelectGroup = React.forwardRef<HTMLOptGroupElement, SelectGroupProps>(
  ({ children, className, label, ...rest }, ref) => {
    const items = React.Children.toArray(children);
    const labelChild = items.find(isLabel);

    return (
      <optgroup
        ref={ref}
        className={classNames(
          CLASS_NAME,
          'kicl-padding-inline-start-none',
          className
        )}
        label={label ?? labelChild?.props.children}
        {...rest}
      >
        {items}
      </optgroup>
    );
  }
);

SelectGroup.displayName = 'SelectGroup';

export { SelectGroup };
