import React from 'react';
import ReactDOM from 'react-dom';

// Context
import { useSpinner } from 'design/components/spinner/context';

const Portal: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const { atRoot } = useSpinner();

  if (!atRoot) {
    return children;
  }

  const Root = document.querySelector('body');

  if (!Root) {
    return children;
  }

  return <>{ReactDOM.createPortal(children, Root)}</>;
};

export { Portal };
