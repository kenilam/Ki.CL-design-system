import React, { useState } from 'react';

import { Calendar } from 'design/components';

import type { Props } from 'design/components/calendar/docs/controls';

const Preview: React.FC<Props> = (props) => {
  const [date, setDate] = useState<Date>();

  return (
    <Calendar
      aria-label='Delivery date'
      onSelect={setDate}
      selected={date}
      {...props}
    />
  );
};

export { Preview };
