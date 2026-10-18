import type React from 'react';

import type { CalendarMode, DateRange } from 'design/components/calendar';

export type DatePickerMode = CalendarMode;

/** Forwarded to the trigger button, so FormControl and FormLabel can name it. */
export type DatePickerTriggerProps = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'aria-describedby' | 'aria-invalid' | 'aria-label' | 'aria-labelledby' | 'id'
>;

type DatePickerBaseProps = DatePickerTriggerProps &
  Pick<React.ComponentPropsWithoutRef<'button'>, 'className' | 'disabled'> &
  Pick<React.ComponentPropsWithoutRef<'input'>, 'placeholder'> & {
    /** Optional format override - default uses locale date string. */
    formatDate?: (date: Date) => string;
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

export type DatePickerProps = DatePickerSingleProps | DatePickerRangeProps;
