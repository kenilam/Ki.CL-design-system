import React from 'react';

import { DatePicker } from 'design/components';

import type { Props } from 'design/components/date-picker/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <DatePicker aria-label='Due date' placeholder='When is it due?' {...props} />
);

export { Preview };
