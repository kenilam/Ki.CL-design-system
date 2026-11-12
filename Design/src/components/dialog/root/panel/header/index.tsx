import React from 'react';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from 'design/components/dialog/constants';

// Context
import { useDialog } from 'design/components/dialog/context';

const Header: React.FunctionComponent = () => {
  const { header, id } = useDialog();

  if (!header) {
    return null;
  }

  return (
    <header className={`${CLASS_NAME}__header`} id={`${id}--header`}>
      {header}
    </header>
  );
};

export { Header };
