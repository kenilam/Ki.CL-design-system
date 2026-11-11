import React, { createContext, useContext, useId, useState } from 'react';

// Helpers
import { startOfDay } from 'design/components/calendar/helpers';

import type { CalendarProps } from 'design/components/calendar/spec';

// Partials
import { Month } from './month';
import { Selection } from './selection';

type Props = CalendarProps & { children: React.ReactNode };

type Calendar = {
  titleId: string;
  today: Date;
};

const CalendarContext = createContext<Calendar | null>(null);

const Provider: React.FunctionComponent<Props> = ({ children, ...props }) => {
  const titleId = useId();
  const [today] = useState(() => {
    return startOfDay(new Date());
  });

  return (
    <CalendarContext.Provider value={{ titleId, today }}>
      <Month calendar={props}>
        <Selection calendar={props}>{children}</Selection>
      </Month>
    </CalendarContext.Provider>
  );
};

const useCalendar = () => {
  const calendar = useContext(CalendarContext);

  if (!calendar) {
    throw new Error('Calendar parts must be used within Calendar');
  }

  return calendar;
};

export { useMonth } from './month';
export { useSelection } from './selection';
export { Provider, useCalendar };
