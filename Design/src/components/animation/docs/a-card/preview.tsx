import React from 'react';

import {
  Animation,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'design/components';

import type { Props } from 'design/components/animation/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Animation key='card' property='slide-from-bottom' {...props}>
    <Card size={4}>
      <CardHeader>
        <CardTitle is='h3'>Daylight</CardTitle>
        <CardDescription>
          The Earth lit by where the sun is now.
        </CardDescription>
      </CardHeader>
    </Card>
  </Animation>
);

export { Preview };
