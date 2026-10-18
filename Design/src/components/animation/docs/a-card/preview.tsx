import React from 'react';

import { Animation, Card, CardDescription, CardTitle } from 'design/components';

import type { Props } from 'design/components/animation/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Animation key='card' property='slide-from-bottom' {...props}>
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
    />
  </Animation>
);

export { Preview };
