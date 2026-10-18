import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as CALENDAR } from 'design/components/calendar/constants';

// Context
import { useCalendar } from 'design/components/calendar/context';

// Helpers
import {
  dayLabel,
  isInRange,
  sameDay,
} from 'design/components/calendar/helpers';

const CLASS_NAME = `${CALENDAR}__day`;

type Props = { date: Date };

/**
 * One day of the month table. The label is the full date, since the cell's
 * text alone ("15") says nothing out of context.
 */
const Day: React.FunctionComponent<Props> = ({ date }) => {
  const {
    disabled,
    mode,
    month,
    onDayClick,
    selectedRange,
    selectedSingle,
    today,
  } = useCalendar();

  const outside = date.getMonth() !== month.getMonth();
  const isToday = sameDay(date, today);
  const isDisabled = disabled?.(date) ?? false;

  const isRangeStart = sameDay(date, selectedRange?.from);
  // A range with no end yet is one day, which rounds at both ends.
  const isRangeEnd = sameDay(date, selectedRange?.to ?? selectedRange?.from);
  const isRangeMiddle = isInRange(date, selectedRange);
  const isSelected =
    mode === 'single'
      ? sameDay(date, selectedSingle)
      : isRangeStart || isRangeEnd;

  return (
    <Layout alignItems='center' display='inline-grid' justifyItems='center'>
      <button
        type='button'
        aria-label={dayLabel(date)}
        aria-current={isToday ? 'date' : undefined}
        aria-pressed={isSelected || isRangeMiddle}
        disabled={isDisabled}
        className={classNames(
          CLASS_NAME,
          'kicl-border-radius-sm',
          'kicl-font-size-small',
          'kicl-line-height-narrower',
          // The fill is positioned against the day.
          'kicl-position-relative',
          {
            [`${CLASS_NAME}--selected`]: isSelected,
            [`${CLASS_NAME}--range-start`]: isRangeStart,
            [`${CLASS_NAME}--range-end`]: isRangeEnd,
            [`${CLASS_NAME}--range-middle`]: isRangeMiddle,
            // A day of another month is quieter until it is picked; the fill
            // behind it is never dimmed.
            'kicl-color-grey':
              outside &&
              !isToday &&
              !isSelected &&
              !isRangeStart &&
              !isRangeEnd &&
              !isRangeMiddle,
            // Today reads in bold and in the confirm green, chosen or not.
            'kicl-color-confirm': isToday,
            'kicl-font-weight-bold': isToday,
            // The chosen day's label on its dark fill.
            'kicl-color-white-pure': isSelected && !isToday,
          }
        )}
        onClick={() => onDayClick(date)}
      >
        {date.getDate()}
      </button>
    </Layout>
  );
};

export { Day };
