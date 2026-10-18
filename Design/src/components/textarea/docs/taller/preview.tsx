import React from 'react';

import { Textarea } from 'design/components';

import type { Props } from 'design/components/textarea/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Textarea
    aria-label='Notes'
    placeholder='Anything else'
    rows={10}
    {...props}
  />
);

export { Preview };
