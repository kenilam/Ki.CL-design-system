import React from 'react';

import { Animated } from 'design/components';

import type { Props } from 'design/components/animated/heading/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Animated.Heading
      className='kicl-text-align-center'
      key='title'
      lookLike='display'
      stagger={60}
      {...props}
    >
      Personal projects are where curiosity becomes craft.
    </Animated.Heading>
  );
};

export { Preview };
