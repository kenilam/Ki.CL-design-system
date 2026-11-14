import React from 'react';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';

// Partials
import { Provider } from './context';
import { Root } from './root';

const AnimatedText = React.forwardRef<HTMLElement, Spec.Props>(
  (
    {
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

AnimatedText.displayName = 'AnimatedText';

type AnimatedTextProps = Spec.Props;

export { AnimatedText, type AnimatedTextProps };
