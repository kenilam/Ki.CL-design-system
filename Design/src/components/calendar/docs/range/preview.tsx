import React, { useState } from 'react';

import { Calendar, type DateRange } from 'design/components';

import type { Props } from 'design/components/calendar/docs/controls';

const Preview: React.FC<Props> = (props) => {
  const [range, setRange] = useState<DateRange>();

  return (
    <Calendar
      aria-label='Trip dates'
      mode='range'
      onSelect={setRange}
      selected={range}
      {...props}
    />
  );
};

export { Preview };
