import React from 'react';

import { Animation } from 'design/components';

import { useAnimated } from 'design/components/animated/context';

import { ZOOMS } from 'design/components/animated/constants';

type Props = Pick<React.ComponentProps<typeof Animation>, 'children'>;

const Zoom: React.FunctionComponent<Props> = ({ children }) => {
  const animated = useAnimated();

  if (animated.property === 'scramble' || !ZOOMS.includes(animated.property)) {
    return children;
  }

  return (
    <Animation
      delay={animated.delay}
      duration={animated.duration}
      easing={animated.easing}
      hold={animated.hold}
      in={animated.in}
      property={animated.property}
    >
      {children}
    </Animation>
  );
};

export { Zoom };
