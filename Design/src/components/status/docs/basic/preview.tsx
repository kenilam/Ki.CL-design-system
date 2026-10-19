import React from 'react';

import { Card, Status } from 'design/components';

import type { Props } from 'design/components/status/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card size='fit'>
    <Status
      level='error'
      message='The message was not sent. Try again.'
      {...props}
    />
  </Card>
);

export { Preview };
