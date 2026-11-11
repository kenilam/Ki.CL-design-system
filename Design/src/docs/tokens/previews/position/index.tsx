import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { BLOCK, FRAME } from 'design/docs/tokens/previews/constants';

type Props = {
  name: string;
};

const Position: React.FunctionComponent<Props> = ({ name }) => {
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
          BLOCK,
          'kicl-inset-block-start-narrow',
          'kicl-inset-inline-start-narrow',
          `kicl-${name}`
        )}
      />
    </div>
  );
};

export { Position };
