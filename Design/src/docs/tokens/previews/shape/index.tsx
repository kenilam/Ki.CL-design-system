import React from 'react';

// Libraries
import classNames from 'classnames';

type Props = {
  name: string;
};

const Shape: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div
      aria-hidden
      className={classNames(
        'kicl-background-color-blue',
        'kicl-border-radius-xs',
        'kicl-inline-size-sm',
        `kicl-${name}`
      )}
    />
  );
};

export { Shape };
