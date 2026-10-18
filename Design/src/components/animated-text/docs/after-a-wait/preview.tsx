import React from 'react';

import { AnimatedText } from 'design/components';

import type { Props } from 'design/components/animated-text/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <AnimatedText delay={600} key='delay' {...props}>
    Hello there
  </AnimatedText>
);

export { Preview };
