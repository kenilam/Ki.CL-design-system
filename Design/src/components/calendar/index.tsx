import React, { useId, useMemo, useState } from 'react';

// Libraries
import classNames from 'classnames';

// Components

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from './constants';

// Context
import { CalendarContext, type CalendarContextValue } from './context';

// Helpers
import { nextRange, seedMonth, startOfDay } from './helpers';

// Partials
import { Grid } from './grid';
import { Header } from './header';
import { Weekdays } from './weekdays';

import type { CalendarProps } from './spec';

const Calendar = React.forwardRef<HTMLTableElement, CalendarProps>(
  (props, ref) => {
    const {
      className,
      defaultMonth: _defaultMonth,
      disabled,
      mode = 'single',
      onSelect: _onSelect,
      selected: _selected,
      ...rest
    } = props;

    const titleId = useId();
    const today = useMemo(() => {
      return startOfDay(new Date());
    }, []);
    const [month, setMonth] = useState(() => {
      const seed = seedMonth(props);
      return new Date(seed.getFullYear(), seed.getMonth(), 1);
    });

    const onDayClick = (date: Date) => {
      if (props.mode === 'range') {
        props.onSelect?.(nextRange(date, props.selected));
        return;
      }

      props.onSelect?.(date);
    };

    const context: CalendarContextValue = {
      disabled,
      mode,
      month,
      onDayClick,
      selectedRange: props.mode === 'range' ? props.selected : undefined,
      selectedSingle: props.mode === 'range' ? undefined : props.selected,
      setMonth,
      titleId,
      today,
    };

    return (
      <CalendarContext.Provider value={context}>
        <table
          ref={ref}
          className={classNames(CLASS_NAME, className)}
          {...rest}
          aria-labelledby={
            rest['aria-labelledby'] ??
            (rest['aria-label'] ? undefined : titleId)
          }
        >
          <Header />
          <Weekdays />
          <Grid />
        </table>
      </CalendarContext.Provider>
    );
  }
);

Calendar.displayName = 'Calendar';

export type {
  CalendarMode,
  CalendarProps,
  CalendarRangeProps,
  CalendarSingleProps,
  DateRange,
} from './spec';
export { Calendar };
