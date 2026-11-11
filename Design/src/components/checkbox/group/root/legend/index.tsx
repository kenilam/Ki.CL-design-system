import React from 'react';

// Libraries
import classNames from 'classnames';

const CLASS_NAME = 'kicl--components--checkbox-group__legend';

const Legend: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <legend
      className={classNames(CLASS_NAME, 'kicl-margin-block-end-narrower')}
    >
      {children}
    </legend>
  );
};

export { Legend };
