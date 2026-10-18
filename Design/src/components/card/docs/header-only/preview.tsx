import React from 'react';

import { Card, CardDescription, CardTitle } from 'design/components';

import type { Props } from 'design/components/card/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card
    header={
      <>
        <CardTitle is='h3'>Daylight</CardTitle>
        <CardDescription>
          The Earth lit by where the sun is now.
        </CardDescription>
      </>
    }
    size={4}
    {...props}
  />
);

export { Preview };
