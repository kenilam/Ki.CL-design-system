import React, { useState } from 'react';

// Components
import { FormDescription, FormLabel } from 'design/components/form';
import { useFormItemControl } from 'design/components/form/context';
import { Popover, PopoverContent } from 'design/components/popover';

// Context
import { DatePickerContext, type DatePickerContextValue } from './context';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Helpers
import { defaultFormatDate, formatRange } from './helpers';

// Partials
import { Calendar } from './calendar';
import { Trigger } from './trigger';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from './constants';

import type { DatePickerProps } from './spec';

type SingleProps = Extract<DatePickerProps, { mode?: 'single' }>;
type RangeProps = Extract<DatePickerProps, { mode: 'range' }>;

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const t = useCopy();

  const {
    className,
    disabled,
    formatDate = defaultFormatDate,
    mode = 'single',
    placeholder = t(
      mode === 'range' ? 'placeholder_date_range' : 'placeholder_date'
    ),
    id,
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    variant,
  } = props;

  const control = useFormItemControl({
    'aria-describedby': ariaDescribedBy,
    description: props.description,
    id,
  });
  const isControlled = props.value !== undefined;
  const [open, setOpen] = useState(false);

  const [uncontrolledSingle, setUncontrolledSingle] = useState(
    mode === 'single' ? (props as SingleProps).defaultValue : undefined
  );
  const [uncontrolledRange, setUncontrolledRange] = useState(
    mode === 'range' ? (props as RangeProps).defaultValue : undefined
  );

  const selectedSingle =
    mode === 'single'
      ? isControlled
        ? (props as SingleProps).value
        : uncontrolledSingle
      : undefined;

  const selectedRange =
    mode === 'range'
      ? isControlled
        ? (props as RangeProps).value
        : uncontrolledRange
      : undefined;

  const label =
    mode === 'range'
      ? formatRange(selectedRange, formatDate, (from, to) =>
          t('date_range', { from, to })
        )
      : selectedSingle
        ? formatDate(selectedSingle)
        : null;

  const context: DatePickerContextValue = {
    disabled,
    label,
    mode,
    onSelectRange: (range) => {
      if (!isControlled) {
        setUncontrolledRange(range);
      }
      (props as RangeProps).onValueChange?.(range);
    },
    onSelectSingle: (date) => {
      if (!isControlled) {
        setUncontrolledSingle(date);
      }
      (props as SingleProps).onValueChange?.(date);
    },
    placeholder,
    selectedRange,
    selectedSingle,
  };

  return (
    <DatePickerContext.Provider value={context}>
      <FormLabel htmlFor={control.id}>{props.label}</FormLabel>
      <Popover onOpenChange={setOpen} open={open}>
        <Trigger
          className={className}
          id={control.id}
          aria-describedby={control['aria-describedby']}
          aria-invalid={ariaInvalid}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
        />
        {/* A forwarded id replaces the trigger's default one, so name the panel from it. */}
        <PopoverContent
          aria-labelledby={control.id}
          className={`${CLASS_NAME}__panel`}
          variant={variant}
        >
          <Calendar />
        </PopoverContent>
      </Popover>
      <FormDescription>{props.description}</FormDescription>
    </DatePickerContext.Provider>
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
