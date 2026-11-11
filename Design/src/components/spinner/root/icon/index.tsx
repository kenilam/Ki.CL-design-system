import React from 'react';

// Components
import { Animation } from 'design/components';

// Icons
import * as Tb from 'react-icons/tb';

// Context
import { useSpinner } from 'design/components/spinner/context';

// Constants
import { BACKDROP_DURATION } from 'design/components/spinner/constants';

// Helpers
import { delayAfter } from 'design/components/spinner/delay-after';

/** The entrance animates `scale` or `translate` and the spin `transform`, so they don't clash. */
const Icon: React.FunctionComponent = () => {
  const spinner = useSpinner();

  const delay =
    spinner.isOverlay && spinner.entering
      ? delayAfter(spinner.delay, BACKDROP_DURATION)
      : spinner.delay;

  return (
    <Animation
      {...spinner.animation}
      delay={delay}
      duration={spinner.duration}
      property={spinner.property}
      in={spinner.entering}
    >
      <Tb.TbReload aria-hidden className='is-revolving' />
    </Animation>
  );
};

export { Icon };
