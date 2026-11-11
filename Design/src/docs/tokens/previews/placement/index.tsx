import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { FRAME } from 'design/docs/tokens/previews/constants';

type Props = {
  name: string;
};

const Placement: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div
      aria-hidden
      className={classNames(
        FRAME,
        'kicl-aspect-ratio-video',
        'kicl-inline-size-max'
      )}
      style={{ zoom: 0.5 }}
    >
      <span
        className={classNames(
          'kicl-background-color-blue',
          'kicl-border-radius-xs',
          'kicl-padding-wide',
          'kicl-position-absolute',
          `kicl-${name}`
        )}
      />
    </div>
  );
};

export { Placement };
