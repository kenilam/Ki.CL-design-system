import React from 'react';

import { AnimatedText } from 'design/components';

import type { Props } from 'design/components/animated-text/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <AnimatedText key='word' {...props}>
      Hello there, it’s nice to see you again.
    </AnimatedText>
  );
};

export { Preview };
