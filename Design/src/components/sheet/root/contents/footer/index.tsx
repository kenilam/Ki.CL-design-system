import React from 'react';

// Components
import { SheetFooter } from 'design/components/sheet/footer';

// Context
import { useSheet } from 'design/components/sheet/context';

const Footer: React.FunctionComponent = () => {
  const { footer } = useSheet();

  if (!footer) {
    return null;
  }

  return <SheetFooter justifyContent='end'>{footer}</SheetFooter>;
};

export { Footer };
