import React from 'react';

import { Animated } from 'design/components';

import type { Props } from 'design/components/animated/heading/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <>
      <Animated.Heading is='h2' key='title' {...props}>
        Every page here is built from one design system.
      </Animated.Heading>
      <Animated.Text delay={400} key='lead' property='fade' variant='secondary'>
        It is served in the reader’s language, and put together at runtime.
      </Animated.Text>
    </>
  );
};

export { Preview };
