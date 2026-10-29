import React from 'react';

import { Textarea } from 'design/components';

import type { Props } from 'design/components/textarea/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Textarea
      aria-label='Message'
      defaultValue='Thanks for the invite. I can make Tuesday or Thursday afternoon.'
      {...props}
    />
  );
};

export { Preview };
