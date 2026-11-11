// Libraries
import classNames from 'classnames';

// Constants
import { CLASS_NAME as CALENDAR } from 'design/components/calendar/constants';

// Context
import {
  useCalendar,
  useMonth,
  useSelection,
} from 'design/components/calendar/context';

// Helpers
import { isInRange, sameDay } from 'design/components/calendar/helpers';

const CLASS_NAME = `${CALENDAR}__day`;

const useDay = (date: Date) => {
  const { today } = useCalendar();
  const { month } = useMonth();
  const selection = useSelection();
  const range = selection.selectedRange;

  const outside = date.getMonth() !== month.getMonth();
  const isToday = sameDay(date, today);

  const isRangeStart = sameDay(date, range?.from);
  // A range with no end yet is a single day.
  const isRangeEnd = sameDay(date, range?.to ?? range?.from);
  const isRangeMiddle = isInRange(date, range);
  const isSelected =
    selection.mode === 'single'
      ? sameDay(date, selection.selectedSingle)
      : isRangeStart || isRangeEnd;

  return {
    className: classNames(
      CLASS_NAME,
      'kicl-border-radius-sm',
      'kicl-font-size-small',
      'kicl-line-height-narrower',
      'kicl-position-relative',
      {
        [`${CLASS_NAME}--selected`]: isSelected,
        [`${CLASS_NAME}--range-start`]: isRangeStart,
        [`${CLASS_NAME}--range-end`]: isRangeEnd,
        [`${CLASS_NAME}--range-middle`]: isRangeMiddle,
        'kicl-color-grey':
          outside &&
          !isToday &&
          !isSelected &&
          !isRangeStart &&
          !isRangeEnd &&
          !isRangeMiddle,
        'kicl-color-confirm': isToday,
        'kicl-font-weight-bold': isToday,
        'kicl-color-white-pure': (isSelected || isRangeMiddle) && !isToday,
      }
    ),
    isDisabled: selection.disabled?.(date) ?? false,
    isPressed: isSelected || isRangeMiddle,
    isToday,
    onClick: () => {
      selection.onDayClick(date);
    },
  };
};

export { useDay };
