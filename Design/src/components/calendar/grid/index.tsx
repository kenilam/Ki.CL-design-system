import React, { useMemo } from 'react';

// Context
import { useCalendar } from 'design/components/calendar/context';

// Helpers
import { startOfDay } from 'design/components/calendar/helpers';

// Partials
import { Day } from './day';

const onKeyDown = (event: React.KeyboardEvent<HTMLTableSectionElement>) => {
  const body = event.currentTarget;
  const forward = body.matches(':dir(rtl)') ? -1 : 1;
  const steps: Record<string, number> = {
    ArrowDown: 7,
    ArrowLeft: -forward,
    ArrowRight: forward,
    ArrowUp: -7,
  };
  const step = steps[event.key];

  if (!step || event.defaultPrevented) {
    return;
  }

  if (!(event.target instanceof HTMLButtonElement)) {
    return;
  }

  const days = [...body.querySelectorAll('button')];
  const next = days[days.indexOf(event.target) + step];

  if (!next) {
    return;
  }

  event.preventDefault();
  next.focus();
};

const Grid: React.FunctionComponent = () => {
  const { month } = useCalendar();

  const weeks = useMemo(() => {
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

  return (
    // Arrow keys on the body move focus between the day buttons.
    // oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <tbody onKeyDown={onKeyDown}>
      {weeks.map((days) => {
        return (
          <tr key={days[0].toISOString()}>
            {days.map((date) => {
              return (
                <td key={date.toISOString()}>
                  <Day date={date} />
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export { Grid };
