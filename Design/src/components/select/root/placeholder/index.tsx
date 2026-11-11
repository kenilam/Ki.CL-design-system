import React from 'react';

const Placeholder: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <option value='' disabled hidden>
      {children}
    </option>
  );
};

export { Placeholder };
