import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { TINT } from 'design/docs/tokens/previews/stack/constants';

const Apex: React.FunctionComponent = () => {
  return (
    <span
      className={classNames(
        'kicl-backdrop-blur',
        'kicl-border-radius-xs',
        'kicl-box-shadow-overlay',
        'kicl-inset-block-wider',
        'kicl-inset-inline-extreme',
        'kicl-position-absolute',
        'kicl-z-index-apex'
      )}
      style={{ backgroundColor: TINT }}
    />
  );
};

export { Apex };
