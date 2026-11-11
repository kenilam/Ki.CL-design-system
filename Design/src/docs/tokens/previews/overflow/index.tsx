import React from 'react';

// Libraries
import classNames from 'classnames';

type Props = {
  name: string;
};

const Overflow: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div
      aria-hidden
      className={classNames(
        'kicl-background-color-grey-700',
        'kicl-border-radius-xs',
        'kicl-inline-size-sm',
        'kicl-max-block-size-columns-1',
        'kicl-padding-narrow',
        `kicl-${name}`
      )}
    >
      <span
        className={classNames(
          'kicl-aspect-ratio-square',
          'kicl-background-color-blue',
          'kicl-border-radius-xs',
          'kicl-display-block',
          'kicl-inline-size-sm'
        )}
      />
    </div>
  );
};

export { Overflow };
