import React from 'react';

import { Provider } from 'design/components/animated/context';

import { Root } from './root';

import type * as Spec from './spec';

const Heading = React.forwardRef<HTMLHeadingElement, Spec.Props>(
  (
    {
      characterSet,
      children,
      delay,
      duration,
      easing,
      hold,
      in: transitionIn,
      property,
      split,
      stagger,
      ...props
    },
    ref
  ) => {
    return (
      <Provider
        characterSet={characterSet}
        delay={delay}
        duration={duration}
        easing={easing}
        hold={hold}
        in={transitionIn}
        property={property}
        split={split}
        stagger={stagger}
        text={children}
      >
        <Root {...props} ref={ref} />
      </Provider>
    );
  }
);

Heading.displayName = 'Animated.Heading';

type HeadingProps = Spec.Props;

export { Heading, type HeadingProps };
