import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { BLOCK } from 'design/docs/tokens/previews/constants';

type Props = {
  name: string;
};

const Opacity: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <span
      aria-hidden
      className={classNames(
        BLOCK,
        'kicl-display-inline-block',
        'kicl-padding-wide'
      )}
      style={{ opacity: `var(--kicl-${name})` }}
    />
  );
};

export { Opacity };
