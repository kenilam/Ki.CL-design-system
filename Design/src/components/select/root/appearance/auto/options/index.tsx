import React from 'react';

// Partials
import { SelectTrigger } from 'design/components/select/trigger';

const Options: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return React.Children.toArray(children).filter((child) => {
    return !(React.isValidElement(child) && child.type === SelectTrigger);
  });
};

export { Options };
