import React, { useState } from 'react';

import { Calendar, type DateRange } from 'design/components';

import type { Props } from 'design/components/calendar/docs/controls';

const Preview: React.FC<Props> = (props) => {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(2026, 9, 12),
    to: new Date(2026, 9, 16),
  });

  return (
    <Calendar
      aria-label='Trip dates'
      defaultMonth={new Date(2026, 9, 1)}
      mode='range'
      onSelect={setRange}
      selected={range}
      {...props}
    />
  );
};

export { Preview };
