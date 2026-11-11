import React from 'react';

// Context
import { useDialog } from 'design/components/dialog/context';

const Header: React.FunctionComponent = () => {
  const { header, id } = useDialog();

  if (!header) {
    return null;
  }

  return <header id={`${id}--header`}>{header}</header>;
};

export { Header };
