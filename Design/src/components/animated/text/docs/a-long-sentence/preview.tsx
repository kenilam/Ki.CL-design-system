import React from 'react';

import { Animated } from 'design/components';

import type { Props } from 'design/components/animated/text/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Animated.Text
      className='kicl-max-inline-size-columns-6'
      key='sentence'
      split='word'
      stagger={80}
      {...props}
    >
      The planet Earth is softly illuminated by the fleeting glow of the sun's
      present position, casting long shadows as the daylight slowly shifts
      across the continents.
    </Animated.Text>
  );
};

export { Preview };
