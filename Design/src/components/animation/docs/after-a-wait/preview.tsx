import React from 'react';

import {
  Animation,
  Card,
  CardDescription,
  CardTitle,
  Heading,
} from 'design/components';

import type { Props } from 'design/components/animation/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <>
      <Animation key='title' property='fade' {...props}>
        <Heading is='h3'>Experiments</Heading>
      </Animation>
      <Animation delay={600} key='card' property='zoom-in' {...props}>
        <Card
          is='article'
          header={
            <>
              <CardTitle is='h4'>Tree of life</CardTitle>
              <CardDescription>
                Comes in 600 ms after the title.
              </CardDescription>
            </>
          }
          size={4}
        />
      </Animation>
    </>
  );
};

export { Preview };
