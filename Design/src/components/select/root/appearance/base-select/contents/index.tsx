import React from 'react';

// Partials
import { SelectTrigger } from 'design/components/select/trigger';
import { SelectValue } from 'design/components/select/value';

const Contents: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const hasTrigger = React.Children.toArray(children).some((child) => {
    return React.isValidElement(child) && child.type === SelectTrigger;
  });

  return (
    <>
      {hasTrigger ? null : (
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
      )}
      {children}
    </>
  );
};

export { Contents };
