import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { TINT } from 'design/docs/tokens/previews/stack/constants';

const Nadir: React.FunctionComponent = () => {
  return (
    <span
      className={classNames(
        'kicl-backdrop-blur',
        'kicl-border-radius-xs',
        'kicl-box-shadow-overlay',
        'kicl-inset-wide',
        'kicl-position-absolute',
        'kicl-z-index-nadir'
      )}
      style={{ backgroundColor: TINT }}
    />
  );
};

export { Nadir };
