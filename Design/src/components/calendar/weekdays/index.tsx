import React from 'react';

// Helpers
import { weekdays } from 'design/components/calendar/helpers';

// Partials
import { Weekday } from './weekday';

const Weekdays: React.FunctionComponent = () => {
  return (
    <thead>
      <tr>
        {weekdays().map(({ long }) => {
          return <Weekday key={long} long={long} />;
        })}
      </tr>
    </thead>
  );
};

export { Weekdays };
