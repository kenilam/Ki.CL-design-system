import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { BLOCK, FRAME } from 'design/docs/tokens/previews/constants';

type Props = {
  name: string;
};

const Display: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div
      aria-hidden
      className={classNames(
        FRAME,
        'kicl-inline-size-md',
        'kicl-padding-narrow',
        `kicl-${name}`
      )}
    >
      <span className={classNames(BLOCK, 'kicl-margin-narrowest')} />
      <span className={classNames(BLOCK, 'kicl-margin-narrowest')} />
      <span className={classNames(BLOCK, 'kicl-margin-narrowest')} />
    </div>
  );
};

export { Display };
