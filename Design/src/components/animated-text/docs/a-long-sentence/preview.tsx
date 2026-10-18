import React from 'react';

import { AnimatedText } from 'design/components';

import type { Props } from 'design/components/animated-text/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <AnimatedText key='sentence' split='word' stagger={80} {...props}>
    The planet Earth is softly illuminated by the fleeting glow of the sun's
    present position, casting long shadows as the daylight slowly shifts across
    the continents.
  </AnimatedText>
);

export { Preview };
