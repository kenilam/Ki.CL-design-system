import React, { createContext, useContext, useState } from 'react';

// Helpers
import { seedMonth } from 'design/components/calendar/helpers';

import type { CalendarProps } from 'design/components/calendar/spec';

// Partials
import { useWeeks } from './use-weeks';

type Props = React.PropsWithChildren<{ calendar: CalendarProps }>;

type Shown = {
  month: Date;
  setMonth: (month: Date) => void;
  weeks: Date[][];
};

const MonthContext = createContext<Shown | null>(null);

const Month: React.FunctionComponent<Props> = ({ calendar, children }) => {
  const [month, setMonth] = useState(() => {
    const seed = seedMonth(calendar);
    return new Date(seed.getFullYear(), seed.getMonth(), 1);
  });
  const weeks = useWeeks(month);

  return (
    <MonthContext.Provider value={{ month, setMonth, weeks }}>
      {children}
    </MonthContext.Provider>
  );
};

const useMonth = () => {
  const month = useContext(MonthContext);

  if (!month) {
    throw new Error('Calendar parts must be used within Calendar');
  }

  return month;
};

export { Month, useMonth };
