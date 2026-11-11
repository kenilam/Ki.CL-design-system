import React from 'react';

// Libraries
import classNames from 'classnames';

type Props = {
  name: string;
};

const Length: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div
      aria-hidden
      className={classNames(
        'kicl-background-color-blue',
        'kicl-border-radius-xs',
        'kicl-max-inline-size-columns-12',
        'kicl-padding-block-narrower'
      )}
      style={{ inlineSize: `var(--kicl-${name})` }}
    />
  );
};

export { Length };
