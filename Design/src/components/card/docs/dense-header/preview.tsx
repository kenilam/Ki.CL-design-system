import React from 'react';

import { Card, CardHeader, CardTitle } from 'design/components';

import type { Props } from 'design/components/card/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card size={4} {...props}>
    <CardHeader className='kicl-padding-block-end-none'>
      <CardTitle>Daylight</CardTitle>
    </CardHeader>
  </Card>
);

export { Preview };
