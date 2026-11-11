import React from 'react';

// Styles
import 'design/docs/tokens/previews/styles.scss';

// Constants
import { DOT, MOTION } from 'design/docs/tokens/previews/constants';

type Props = {
  name: string;
};

const Easing: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div aria-hidden className={MOTION}>
      <span
        className={DOT}
        style={{
          animationDuration: 'var(--kicl-transition-duration-slowest)',
          animationTimingFunction: `var(--kicl-${name})`,
        }}
      />
    </div>
  );
};

export { Easing };
