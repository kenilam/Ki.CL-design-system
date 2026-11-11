import { useMemo } from 'react';

// Helpers
import { startOfDay } from 'design/components/calendar/helpers';

const useWeeks = (month: Date) => {
  return useMemo(() => {
    const first = new Date(month.getFullYear(), month.getMonth(), 1);
    const gridStart = new Date(first);
    gridStart.setDate(first.getDate() - first.getDay());

    return Array.from({ length: 6 }, (_, week) => {
      return Array.from({ length: 7 }, (_, day) => {
        const date = new Date(gridStart);
        date.setDate(gridStart.getDate() + week * 7 + day);
        return startOfDay(date);
      });
    });
  }, [month]);
};

export { useWeeks };
