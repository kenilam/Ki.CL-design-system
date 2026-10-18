import React from 'react';

import { Card, Status } from 'design/components';

import type { Props } from 'design/components/status/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card size='fit'>
    <Status
      level='info'
      message='Saved to your account.'
      title='Saved'
      {...props}
    />
  </Card>
);

export { Preview };
