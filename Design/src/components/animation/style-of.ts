import React from 'react';

// Spec
import type * as Spec from './spec';

// Constants
import { CLASS_NAME } from './constants';

type Options = Required<Pick<Spec.Options, 'duration' | 'easing'>> & {
  delay?: number | string;
  style?: React.CSSProperties;
};

const styleOf = ({ delay, duration, easing, style }: Options) => {
  const value = {
    [`--${CLASS_NAME}--transition-duration`]: `var(--kicl-transition-duration-${duration})`,
    [`--${CLASS_NAME}--transition-timing-function`]: `var(--kicl-${easing})`,
    ...style,
  } as React.CSSProperties;

  if (delay !== undefined) {
    value[`--${CLASS_NAME}--transition-delay`] =
      typeof delay === 'number' ? `${delay}ms` : delay;
  }

  return value;
};

export { styleOf };
