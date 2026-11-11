import React from 'react';

// Components
import { Animation } from 'design/components';

// Context
import { useAnimatedText } from 'design/components/animated-text/context';

type Props = React.PropsWithChildren<{ order: number }>;

const Piece: React.FunctionComponent<Props> = ({ children, order }) => {
  const animatedText = useAnimatedText();

  return (
    <Animation
      delay={animatedText.delay + animatedText.stagger * order}
      duration={animatedText.duration}
      easing={animatedText.easing}
      property={animatedText.property}
    >
      <span aria-hidden className='kicl-display-inline-block'>
        {children}
      </span>
    </Animation>
  );
};

export { Piece };
