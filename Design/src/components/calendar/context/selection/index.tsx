import React, { createContext, useContext } from 'react';

// Helpers
import { nextRange } from 'design/components/calendar/helpers';

import type {
  CalendarMode,
  CalendarProps,
  DateRange,
} from 'design/components/calendar/spec';

type Props = React.PropsWithChildren<{ calendar: CalendarProps }>;

type Selected = {
  disabled?: (date: Date) => boolean;
  mode: CalendarMode;
  onDayClick: (date: Date) => void;
  selectedRange?: DateRange;
  selectedSingle?: Date;
};

const SelectionContext = createContext<Selected | null>(null);

const Selection: React.FunctionComponent<Props> = ({ calendar, children }) => {
  const onDayClick = (date: Date) => {
    if (calendar.mode === 'range') {
      calendar.onSelect?.(nextRange(date, calendar.selected));
      return;
    }

    calendar.onSelect?.(date);
  };

  return (
    <SelectionContext.Provider
      value={{
        disabled: calendar.disabled,
        mode: calendar.mode ?? 'single',
        onDayClick,
        selectedRange:
          calendar.mode === 'range' ? calendar.selected : undefined,
        selectedSingle:
          calendar.mode === 'range' ? undefined : calendar.selected,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

const useSelection = () => {
  const selection = useContext(SelectionContext);

  if (!selection) {
    throw new Error('Calendar parts must be used within Calendar');
  }

  return selection;
};

export { Selection, useSelection };
