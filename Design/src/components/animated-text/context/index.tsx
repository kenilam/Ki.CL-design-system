import React, { createContext, useContext } from 'react';

// Spec
import type * as Spec from 'design/components/animated-text/spec';

// Partials
import { useText } from './use-text';

type Options = Pick<
  Spec.Props,
  'delay' | 'duration' | 'easing' | 'in' | 'property' | 'split' | 'stagger'
>;

type Props = React.PropsWithChildren<
  Options & { text: Spec.Props['children'] }
>;

type Value = Required<Options> & ReturnType<typeof useText>;

const AnimatedTextContext = createContext<Value | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  children,
  delay = 0,
  duration = 'slower',
  easing = 'ease-standard-in-out',
  in: transitionIn = true,
  property = 'slide-from-bottom',
  split = 'word',
  stagger = 50,
  text,
}) => {
  const { replaced, text: shown } = useText(text);

  return (
    <AnimatedTextContext.Provider
      value={{
        delay,
        duration,
        easing,
        in: transitionIn,
        property,
        replaced,
        split,
        stagger,
        text: shown,
      }}
    >
      {children}
    </AnimatedTextContext.Provider>
  );
};

const useAnimatedText = () => {
  const animatedText = useContext(AnimatedTextContext);

  if (!animatedText) {
    throw new Error('useAnimatedText needs an AnimatedText around it.');
  }

  return animatedText;
};

export { Provider, useAnimatedText };
