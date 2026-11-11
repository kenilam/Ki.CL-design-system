import React from 'react';

// Context
import { useMonth } from 'design/components/calendar/context';

// Partials
import { Day } from './day';

type Props = { start: Date };

const Week: React.FunctionComponent<Props> = ({ start }) => {
  const { weeks } = useMonth();
  const days = weeks.find(([first]) => {
    return first.getTime() === start.getTime();
  });

  if (!days) {
    return null;
  }

  return (
    <tr>
      {days.map((date) => {
        return <Day date={date} key={date.toISOString()} />;
      })}
    </tr>
  );
};

export { Week };
