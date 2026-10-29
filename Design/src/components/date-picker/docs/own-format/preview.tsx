import React from 'react';

import { DatePicker } from 'design/components';

import type { Props } from 'design/components/date-picker/docs/controls';

const formatDate = (date: Date) =>
  date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const Preview: React.FC<Props> = (props) => (
  <DatePicker
    aria-label='Delivery date'
    defaultValue={new Date(2026, 9, 14)}
    formatDate={formatDate}
    {...props}
  />
);

export { Preview };
