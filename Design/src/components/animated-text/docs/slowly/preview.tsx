import React from 'react';

import { AnimatedText } from 'design/components';

import type { Props } from 'design/components/animated-text/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <AnimatedText duration='slowest' key='slow' stagger={150} {...props}>
      Hello there, it’s nice to see you again.
    </AnimatedText>
  );
};

export { Preview };
