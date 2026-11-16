import React, { createContext, useContext } from 'react';

import type { Options } from 'design/components/animated/spec';

import { CHARACTER_SET } from 'design/components/animated/constants';

import { useText } from './use-text';

type Props = React.PropsWithChildren<
  Omit<Options, 'children'> & { text: Options['children'] }
>;

type Value = Required<Omit<Options, 'children'>> & ReturnType<typeof useText>;

const AnimatedContext = createContext<Value | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  characterSet = CHARACTER_SET,
  children,
  delay = 0,
  duration = 'slower',
  easing = 'ease-standard-in-out',
  hold = false,
  in: transitionIn = true,
  property = 'slide-from-bottom',
  split = 'word',
  stagger = 50,
  text,
}) => {
  const shown = useText(text);

  return (
    <AnimatedContext.Provider
      value={{
        ...shown,
        characterSet,
        delay,
        duration,
        easing,
        hold,
        in: transitionIn,
        property,
        split: property === 'scramble' ? 'letter' : split,
        stagger,
      }}
    >
      {children}
    </AnimatedContext.Provider>
  );
};

const useAnimated = () => {
  const animated = useContext(AnimatedContext);

  if (!animated) {
    throw new Error('useAnimated needs an Animated component around it.');
  }

  return animated;
};

export { Provider, useAnimated };
