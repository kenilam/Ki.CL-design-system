import React from 'react';

import { AnimatedText } from 'design/components';

import type { Props } from 'design/components/animated-text/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <AnimatedText key='heading' lookLike='h2' {...props}>
    Experiments
  </AnimatedText>
);

export { Preview };
