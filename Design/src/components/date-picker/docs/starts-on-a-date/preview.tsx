import React from 'react';

import { DatePicker } from 'design/components';

import type { Props } from 'design/components/date-picker/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <DatePicker
      aria-label='Launch'
      defaultValue={new Date(2026, 11, 1)}
      {...props}
    />
  );
};

export { Preview };
