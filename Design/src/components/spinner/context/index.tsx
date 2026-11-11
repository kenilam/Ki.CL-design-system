import React, { createContext, useContext } from 'react';

// Components
import type { AnimationProps } from 'design/components';

// Spec
import type * as Spec from 'design/components/spinner/spec';

type Value = Required<Pick<AnimationProps, 'delay' | 'duration' | 'property'>> &
  Pick<Spec.Props, 'atRoot' | 'backdrop' | 'className' | 'label' | 'size'> & {
    animation: Record<string, unknown>;
    entering: boolean;
    isOverlay: boolean;
  };

const SpinnerContext = createContext<Value | null>(null);

const Provider: React.FunctionComponent<Spec.Props> = ({
  atRoot,
  backdrop = true,
  children,
  className,
  delay = 0,
  duration = 'fast',
  in: transitionIn,
  label,
  position = 'overlay',
  property = 'zoom-out',
  size,
  ...animation
}) => {
  return (
    <SpinnerContext.Provider
      value={{
        animation,
        atRoot,
        backdrop,
        className,
        delay,
        duration,
        entering: transitionIn ?? true,
        isOverlay: position === 'overlay',
        label,
        property,
        size,
      }}
    >
      {children}
    </SpinnerContext.Provider>
  );
};

const useSpinner = () => {
  const spinner = useContext(SpinnerContext);

  if (!spinner) {
    throw new Error('useSpinner needs a Spinner around it.');
  }

  return spinner;
};

export { Provider, useSpinner };
