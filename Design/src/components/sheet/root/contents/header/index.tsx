import React from 'react';

// Components
import { SheetHeader } from 'design/components/sheet/header';

// Context
import { useSheet } from 'design/components/sheet/context';

const Header: React.FunctionComponent = () => {
  const { header, id } = useSheet();

  if (!header) {
    return null;
  }

  return <SheetHeader id={`${id}--header`}>{header}</SheetHeader>;
};

export { Header };
