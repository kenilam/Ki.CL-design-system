import React from 'react';

import { DatePicker } from 'design/components';

import type { Props } from 'design/components/date-picker/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <DatePicker
      description='The first day you can come in.'
      label='Start date'
      {...props}
    />
  );
};

export { Preview };
