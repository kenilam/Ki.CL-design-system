import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { FormItem } from 'design/components/form';
import { useFormItemControl } from 'design/components/form/context';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from './constants';

// Partials
import { SelectTrigger } from './trigger';
import { SelectValue } from './value';

import type { SelectProps } from './spec';

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ description, label, layout, ...props }, ref): React.ReactElement => {
    const control = useFormItemControl(props);

    if (label || description) {
      return (
        <FormItem
          {...layout}
          description={description}
          label={label}
          required={props.required}
        >
          <Select {...props} ref={ref} />
        </FormItem>
      );
    }

    const {
      children,
      className,
      defaultValue,
      inline,
      onChange,
      onValueChange,
      placeholder,
      value,
      ...rest
    } = props;
    const hasTrigger = React.Children.toArray(children).some((child) => {
      return React.isValidElement(child) && child.type === SelectTrigger;
    });

    return (
      <select
        ref={ref}
        className={classNames(
          CLASS_NAME,
          {
            [`${CLASS_NAME}--inline`]: inline,
            'kicl-font-size-small': !inline,
            'kicl-inline-size-full': !inline,
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
        {hasTrigger ? null : (
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
        )}
        {children}
        {placeholder !== undefined ? (
          <option value='' disabled hidden>
            {placeholder}
          </option>
        ) : null}
      </select>
    );
  }
);

Select.displayName = 'Select';

export type {
  SelectContentProps,
  SelectGroupProps,
  SelectItemProps,
  SelectLabelProps,
  SelectProps,
  SelectSeparatorProps,
  SelectTriggerProps,
  SelectValueProps,
} from './spec';

export { SelectContent } from './content';
export { SelectGroup } from './group';
export { SelectItem } from './item';
export { SelectLabel } from './label';
export { SelectSeparator } from './separator';
export { SelectTrigger } from './trigger';
export { SelectValue } from './value';
export { Select };
