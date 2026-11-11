import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { FRAME } from 'design/docs/tokens/previews/constants';

type Props = {
  name: string;
};

const Backdrop: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div
      aria-hidden
      className={classNames(
        FRAME,
        'kicl-aspect-ratio-video',
        'kicl-inline-size-md'
      )}
      style={{ backgroundImage: 'var(--kicl-gradient-shift)' }}
    >
      <span
        className={classNames(
          'kicl-border-radius-xs',
          'kicl-inset-narrow',
          'kicl-position-absolute'
        )}
        style={{ backdropFilter: `var(--kicl-${name})` }}
      />
    </div>
  );
};

export { Backdrop };
