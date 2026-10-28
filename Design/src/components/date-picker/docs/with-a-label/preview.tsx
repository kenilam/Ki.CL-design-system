import React from 'react';

import { DatePicker, FormItem } from 'design/components';

import type { Props } from 'design/components/date-picker/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <FormItem>
    <DatePicker
      description='The first day you can come in.'
      label='Start date'
      {...props}
    />
  </FormItem>
);

export { Preview };
