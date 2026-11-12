import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { useFormItemControl } from 'design/components';

// Styles
import './picker.scss';
import './placement.scss';
import './styles.scss';

// Constants
import { CLASS_NAME } from 'design/components/select/constants';

// Partials
import { Placeholder } from 'design/components/select/root/placeholder';
import { Contents } from './contents';

import type { Props } from 'design/components/select/root';

const BaseSelect: React.FunctionComponent<Props> = ({
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
        'kicl-inline-size-fit',
        {
          [`${CLASS_NAME}--inline`]: inline,
          'kicl-font-size-small': !inline,
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

export { BaseSelect };
