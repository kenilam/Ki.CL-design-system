import React, { createContext, useContext } from 'react';

// Spec
import type * as Spec from 'design/components/animated-text/spec';

// Partials
import { useText } from './use-text';

type Options = Pick<
  Spec.Props,
  'delay' | 'duration' | 'easing' | 'property' | 'split' | 'stagger'
>;

type Props = React.PropsWithChildren<
  Options & { text: Spec.Props['children'] }
>;

type Value = Required<Omit<Options, 'easing'>> &
  Pick<Options, 'easing'> &
  ReturnType<typeof useText>;

const AnimatedTextContext = createContext<Value | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  children,
  delay = 0,
  duration = 'fastest',
  easing,
  property = 'slide-from-top',
  split = 'letter',
  stagger = 10,
  text,
}) => {
  const { replaced, text: shown } = useText(text);

  return (
    <AnimatedTextContext.Provider
      value={{
        delay,
        duration,
        easing,
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
