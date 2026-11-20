import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { CLASS_NAME } from 'design/components/color-picker/constants';

const Preview: React.FunctionComponent = () => {
  return (
    <span
      aria-hidden
      className={classNames(
        `${CLASS_NAME}__preview`,
        'kicl-margin-block-end-narrow'
      )}
    />
  );
};

export { Preview };
