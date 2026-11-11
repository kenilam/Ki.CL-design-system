import React from 'react';

const Legend: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return <legend className='kicl-margin-block-end-narrower'>{children}</legend>;
};

export { Legend };
