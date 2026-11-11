import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { useFormItemControl } from 'design/components';

// Constants
import { CLASS_NAME } from 'design/components/select/constants';

// Partials
import { Contents } from './contents';
import { Placeholder } from './placeholder';

import type { SelectProps } from 'design/components/select/spec';

type Props = Omit<SelectProps, 'description' | 'label' | 'layout'> & {
  ref?: React.Ref<HTMLSelectElement>;
};

const Root: React.FunctionComponent<Props> = ({
  children,
  className,
  defaultValue,
  inline,
  onChange,
  onValueChange,
  placeholder,
  placement = 'block-end',
  ref,
  value,
  ...rest
}) => {
  const control = useFormItemControl(rest);
  const [axis, edge, align = 'start'] = placement.split('-');

  return (
    <select
      ref={ref}
      className={classNames(
        CLASS_NAME,
        `${CLASS_NAME}--${axis}-${edge}--${align}`,
        {
          [`${CLASS_NAME}--inline`]: inline,
          'kicl-font-size-small': !inline,
          'kicl-inline-size-fit': !inline,
        },
        className
      )}
      value={value}
      defaultValue={
        value === undefined && placeholder !== undefined
          ? (defaultValue ?? '')
          : defaultValue
      }
      onChange={(event) => {
        onChange?.(event);
        onValueChange?.(event.currentTarget.value);
      }}
      {...rest}
      {...control}
    >
      <Contents>{children}</Contents>
      {placeholder !== undefined ? (
        <Placeholder>{placeholder}</Placeholder>
      ) : null}
    </select>
  );
};

export { Root };
