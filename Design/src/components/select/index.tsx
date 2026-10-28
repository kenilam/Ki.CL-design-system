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

/**
 * A native `<select>` - API aligned with
 * https://ui.shadcn.com/docs/components/base/select
 *
 * Where `appearance: base-select` is supported, the face is a SelectTrigger,
 * drawn here with the chosen option and the system's arrow unless the
 * children bring one, and the picker is styled. Elsewhere the browser draws
 * its own select from the same options, so keyboard, typeahead and form
 * value come from the platform. `id` and aria props (from FormControl) land
 * on the `<select>`.
 */
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
      onChange,
      onValueChange,
      placeholder,
      value,
      ...rest
    } = props;
    const hasTrigger = React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.type === SelectTrigger
    );

    return (
      <select
        ref={ref}
        // The same type as `Input`.
        className={classNames(
          CLASS_NAME,
          'kicl-font-size-small',
          'kicl-inline-size-full',
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
