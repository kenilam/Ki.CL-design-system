import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { BLOCK, FRAME } from 'design/docs/tokens/previews/constants';

type Props = {
  name: string;
};

const Stack: React.FunctionComponent<Props> = ({ name }) => {
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
          'kicl-background-color-grey-200',
          'kicl-border-radius-xs',
          'kicl-inset-block-start-narrow',
          'kicl-inset-inline-start-narrow',
          'kicl-padding-wide',
          'kicl-position-absolute',
          'kicl-z-index-base'
        )}
      />
      <span
        className={classNames(
          BLOCK,
          'kicl-inset-block-start-wide',
          'kicl-inset-inline-start-wide',
          'kicl-padding-wide',
          'kicl-position-absolute',
          `kicl-${name}`
        )}
      />
    </div>
  );
};

export { Stack };
