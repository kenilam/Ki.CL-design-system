import React from 'react';

import { AnimatedText } from 'design/components';

import type { Props } from 'design/components/animated-text/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <AnimatedText duration='slow' key='slow' stagger={60} {...props}>
      Hello there
    </AnimatedText>
  );
};

export { Preview };
