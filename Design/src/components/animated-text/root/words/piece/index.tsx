import React from 'react';

// Components
import { Animation } from 'design/components';

// Context
import { useAnimatedText } from 'design/components/animated-text/context';

// Constants
import { ZOOMS } from 'design/components/animated-text/constants';

type Props = React.PropsWithChildren<{ order: number }>;

const Piece: React.FunctionComponent<Props> = ({ children, order }) => {
  const animatedText = useAnimatedText();

  let property = animatedText.property;

  if (ZOOMS.includes(property)) {
    property = 'fade';
  }

  return (
    <Animation
      delay={animatedText.delay + animatedText.stagger * order}
      duration={animatedText.duration}
      easing={animatedText.easing}
      in={animatedText.in}
      property={property}
    >
      <span aria-hidden className='kicl-display-inline-block'>
        {children}
      </span>
    </Animation>
  );
};

export { Piece };
