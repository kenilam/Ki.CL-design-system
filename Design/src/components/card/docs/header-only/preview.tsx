import React from 'react';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'design/components';

import type { Props } from 'design/components/card/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card size={4} {...props}>
    <CardHeader>
      <CardTitle is='h3'>Daylight</CardTitle>
      <CardDescription>The Earth lit by where the sun is now.</CardDescription>
    </CardHeader>
  </Card>
);

export { Preview };
