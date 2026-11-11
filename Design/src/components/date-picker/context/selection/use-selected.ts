import { useState } from 'react';

// Spec
import type { DatePickerProps } from 'design/components/date-picker/spec';

type SingleProps = Extract<DatePickerProps, { mode?: 'single' }>;
type RangeProps = Extract<DatePickerProps, { mode: 'range' }>;

const useSelected = (props: DatePickerProps) => {
  const { mode = 'single' } = props;

  const isControlled = props.value !== undefined;

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

  return {
    mode,
    onSelectRange: (range: RangeProps['value']) => {
      if (!isControlled) {
        setUncontrolledRange(range);
      }
      (props as RangeProps).onValueChange?.(range);
    },
    onSelectSingle: (date: SingleProps['value']) => {
      if (!isControlled) {
        setUncontrolledSingle(date);
      }
      (props as SingleProps).onValueChange?.(date);
    },
    selectedRange,
    selectedSingle,
  };
};

export { useSelected };
