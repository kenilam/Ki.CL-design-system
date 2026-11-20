import React from 'react';

// Components
import { SheetHeader } from 'design/components/sheet/header';

// Context
import { useSheet } from 'design/components/sheet/context';

// Hooks
import { useBlockSize } from 'design/components/sheet/root/contents/use-block-size';

const Header: React.FunctionComponent = () => {
  const { header, id } = useSheet();
  const ref = useBlockSize('header');

  if (!header) {
    return null;
  }

  return (
    <SheetHeader id={`${id}--header`} ref={ref}>
      {header}
    </SheetHeader>
  );
};

export { Header };
