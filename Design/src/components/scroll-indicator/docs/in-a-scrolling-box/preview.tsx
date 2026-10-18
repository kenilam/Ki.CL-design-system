import React from 'react';

import { ScrollIndicator, Text } from 'design/components';

const Preview: React.FC = () => (
  <article className='kicl-border-radius-md kicl-contain-paint kicl-inline-size-columns-8 kicl-max-block-size-columns-2 kicl-overflow-y-auto kicl-padding-inline kicl-position-relative'>
    <ScrollIndicator className='kicl-position-sticky' />
    <Text>
      Daylight shows the Earth lit by where the sun is now. Drag the globe to
      turn it, or pick a place to jump there.
    </Text>
    <Text>
      The music visualiser draws a track as it plays. Any track can be saved as
      a ten-second clip.
    </Text>
    <Text>
      Tree of life walks through the versions of one drawing, from the first
      sketch to the current one.
    </Text>
    <Text>
      The robotic arm runs a simulation of a factory floor, with the robots and
      their brains in their own module.
    </Text>
    <Text>
      Each experiment is on its own page, built from the components documented
      here.
    </Text>
  </article>
);

export { Preview };
