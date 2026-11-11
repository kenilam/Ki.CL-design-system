import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Text } from 'design/components';

// Spec
import type * as Spec from 'design/components/animated-text/spec';

// Context
import { useAnimatedText } from 'design/components/animated-text/context';

// Constants
import { CLASS_NAME } from 'design/components/animated-text/constants';

// Partials
import { Words } from './words';

type Props = Omit<
  Spec.Props,
  | 'children'
  | 'delay'
  | 'duration'
  | 'easing'
  | 'property'
  | 'split'
  | 'stagger'
> &
  Pick<React.ComponentProps<typeof Text>, 'ref'>;

const Root: React.FunctionComponent<Props> = ({ className, ref, ...props }) => {
  const { replaced, text } = useAnimatedText();

  if (text === null) {
    return null;
  }

  return (
    <Text
      {...(props as React.ComponentProps<typeof Text>)}
      className={classNames(CLASS_NAME, className)}
      ref={ref}
    >
      {replaced ? text : <Words />}
    </Text>
  );
};

export { Root };
