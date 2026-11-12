import React from 'react';

// Context
import { useDialog } from 'design/components/dialog/context';

// Constants
import { CLASS_NAME } from 'design/components/dialog/constants';

const Footer: React.FunctionComponent = () => {
  const { footer } = useDialog();

  if (!footer) {
    return null;
  }

  return <footer className={`${CLASS_NAME}__footer`}>{footer}</footer>;
};

export { Footer };
