import React from 'react';

import { Card, Status } from 'design/components';

import type { Props } from 'design/components/status/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card is='section' size='fit'>
    <Status level='warning' {...props} />
  </Card>
);

export { Preview };
