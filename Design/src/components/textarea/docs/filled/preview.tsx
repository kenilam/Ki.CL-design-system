import React from 'react';

import { Textarea } from 'design/components';

import type { Props } from 'design/components/textarea/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Textarea
    aria-label='Message'
    className='kicl-inline-size-columns-4'
    defaultValue='Thanks for the invite. I can make Tuesday or Thursday afternoon.'
    {...props}
  />
);

export { Preview };
