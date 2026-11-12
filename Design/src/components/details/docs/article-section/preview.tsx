import React from 'react';

import { Details, Heading, Text } from 'design/components';

import type { Props } from 'design/components/details/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <article>
      <Heading is='h2'>How the map was made</Heading>
      <Details heading='h3' summary='Where the light comes from' {...props}>
        <Text>
          The sun’s position is worked out from the date and time, so the map
          needs no data from a server.
        </Text>
        <Text>Each place is lit by how high the sun is above it.</Text>
      </Details>
      <Details heading='h3' summary='How often it changes'>
        <Text>
          Once a minute. The line between day and night moves a quarter of a
          degree in that time.
        </Text>
      </Details>
    </article>
  );
};

export { Preview };
