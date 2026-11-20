import React from 'react';

// Components
import { SheetFooter } from 'design/components/sheet/footer';

// Context
import { useSheet } from 'design/components/sheet/context';

// Hooks
import { useBlockSize } from 'design/components/sheet/root/contents/use-block-size';

const Footer: React.FunctionComponent = () => {
  const { footer } = useSheet();
  const ref = useBlockSize('footer');

  if (!footer) {
    return null;
  }

  return (
    <SheetFooter justifyContent='end' ref={ref}>
      {footer}
    </SheetFooter>
  );
};

export { Footer };
