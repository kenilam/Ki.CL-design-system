import React from 'react';

// Components
import { FormItem } from 'design/components/form';

// Context
import { Provider } from './context';

// Partials
import { Root } from './root';

// Styles
import './styles.scss';

import type { DatePickerProps } from './spec';

const DatePicker: React.FC<DatePickerProps> = ({
  description,
  label,
  layout,
  ...props
}) => {
  if (label || description) {
    return (
      <FormItem
        {...layout}
        description={description}
        label={label}
        required={props.required}
      >
        <DatePicker {...props} />
      </FormItem>
    );
  }

  return (
    <Provider picker={props as DatePickerProps}>
      <Root />
    </Provider>
  );
};

DatePicker.displayName = 'DatePicker';

export type {
  DatePickerProps,
  DatePickerMode,
  DatePickerRangeProps,
  DatePickerSingleProps,
} from './spec';
export type { DateRange } from 'design/components/calendar';
export { DatePicker };
