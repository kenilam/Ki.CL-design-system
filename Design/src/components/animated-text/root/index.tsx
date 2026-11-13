import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Animation, Text } from 'design/components';

// Spec
import type * as Spec from 'design/components/animated-text/spec';

// Context
import { useAnimatedText } from 'design/components/animated-text/context';

// Constants
import { CLASS_NAME, ZOOMS } from 'design/components/animated-text/constants';

// Partials
import { Words } from './words';

type Props = Omit<
  Spec.Props,
  | 'children'
  | 'delay'
  | 'duration'
  | 'easing'
  | 'in'
  | 'property'
  | 'split'
  | 'stagger'
> &
  Pick<React.ComponentProps<typeof Text>, 'ref'>;

const Root: React.FunctionComponent<Props> = ({ className, ref, ...props }) => {
  const animatedText = useAnimatedText();

  if (animatedText.text === null) {
    return null;
  }

  const zoom = ZOOMS.includes(animatedText.property);

  const root = (
    <Text
      {...(props as React.ComponentProps<typeof Text>)}
      className={classNames(
        CLASS_NAME,
        { 'kicl-display-inline-block': zoom },
        className
      )}
      ref={ref}
    >
      <Words />
    </Text>
  );

  if (!zoom) {
    return root;
  }

  return (
    <Animation
      delay={animatedText.delay}
      duration={animatedText.duration}
      easing={animatedText.easing}
      in={animatedText.in}
      property={animatedText.property}
    >
      {root}
    </Animation>
  );
};

export { Root };
