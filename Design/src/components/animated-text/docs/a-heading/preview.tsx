import React from 'react';

import { AnimatedText, Heading } from 'design/components';

import type { Props } from 'design/components/animated-text/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Heading is='h2'>
      <AnimatedText is='span' key='heading' unstyled {...props}>
        Experiments
      </AnimatedText>
    </Heading>
  );
};

export { Preview };
