import React from 'react';

import { Animated } from 'design/components';

import type { Props } from 'design/components/animated/text/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Animated.Text key='word' {...props}>
      Hello there, it’s nice to see you again.
    </Animated.Text>
  );
};

export { Preview };
