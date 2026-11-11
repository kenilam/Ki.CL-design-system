import React from 'react';

// Context
import { useMonth } from 'design/components/calendar/context';

// Partials
import { Week } from './week';

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
  const { weeks } = useMonth();

  return (
    // Arrow keys on the body move focus between the day buttons.
    // oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <tbody onKeyDown={onKeyDown}>
      {weeks.map(([start]) => {
        return <Week key={start.toISOString()} start={start} />;
      })}
    </tbody>
  );
};

export { Grid };
