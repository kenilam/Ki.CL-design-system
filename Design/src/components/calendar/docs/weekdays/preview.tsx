import React, { useState } from 'react';

import { Calendar } from 'design/components';

import type { Props } from 'design/components/calendar/docs/controls';

const Preview: React.FC<Props> = (props) => {
  const [date, setDate] = useState<Date>();

  return (
    <Calendar
      aria-label='Meeting date'
      disabled={(day) => day.getDay() === 0 || day.getDay() === 6}
      onSelect={setDate}
      selected={date}
      {...props}
    />
  );
};

export { Preview };
