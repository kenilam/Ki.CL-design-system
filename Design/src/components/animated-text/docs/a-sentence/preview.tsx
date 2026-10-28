import React from 'react';

import { AnimatedText } from 'design/components';

import type { Props } from 'design/components/animated-text/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <AnimatedText key='sentence' split='word' stagger={80} {...props}>
    Where it’s day and where it’s night on Earth right now
  </AnimatedText>
);

export { Preview };
