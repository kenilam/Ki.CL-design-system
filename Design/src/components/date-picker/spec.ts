import type React from 'react';

import type { CalendarMode, DateRange } from 'design/components/calendar';
import type { FormItemFieldProps } from 'design/components/form';
import type { PopoverVariant } from 'design/components/popover/spec';

export type DatePickerMode = CalendarMode;

/** Forwarded to the trigger button, so FormControl and FormLabel can name it. */
export type DatePickerTriggerProps = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'aria-describedby'
  | 'aria-invalid'
  | 'aria-label'
  | 'aria-labelledby'
  | 'className'
  | 'id'
>;

type DatePickerBaseProps = DatePickerTriggerProps &
  Pick<React.ComponentPropsWithoutRef<'button'>, 'className' | 'disabled'> &
  Pick<React.ComponentPropsWithoutRef<'input'>, 'placeholder' | 'required'> & {
    /** Defaults to the locale's date string. */
    formatDate?: (date: Date) => string;
    variant?: PopoverVariant;
  };

export type DatePickerSingleProps = DatePickerBaseProps & {
  mode?: 'single';
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date | undefined) => void;
};

export type DatePickerRangeProps = DatePickerBaseProps & {
  mode: 'range';
  value?: DateRange;
  defaultValue?: DateRange;
  onValueChange?: (range: DateRange | undefined) => void;
};

export type DatePickerProps = (DatePickerSingleProps | DatePickerRangeProps) &
  FormItemFieldProps;
