import React from 'react';

// Styles
import 'design/docs/tokens/previews/styles.scss';

// Constants
import { DOT, MOTION } from 'design/docs/tokens/previews/constants';
const Instant: React.FunctionComponent = () => {
  return (
    <div aria-hidden className={MOTION}>
      <span
        className={DOT}
        style={{
          animationDirection: 'normal',
          animationDuration: 'var(--kicl-transition-duration-slowest)',
          animationTimingFunction: 'steps(2, jump-none)',
        }}
      />
    </div>
  );
};

export { Instant };
