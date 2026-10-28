import React from 'react';

import { Card, CardDescription, CardTitle } from 'design/components';

import type { Props } from 'design/components/card/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card
    is='article'
    header={
      <>
        <CardTitle is='h3'>Daylight</CardTitle>
        <CardDescription>
          Where it’s day and where it’s night on Earth right now.
        </CardDescription>
      </>
    }
    size={4}
    {...props}
  />
);

export { Preview };
