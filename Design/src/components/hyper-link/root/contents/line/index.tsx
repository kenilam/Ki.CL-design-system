import React from 'react';

// Class names
import { CLASS_NAME } from 'design/components/hyper-link/class-names';

// Styles
import './styles.scss';

/** The span lets the underline skip the icons. */
const Line: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return <span className={`${CLASS_NAME}__line`}>{children}</span>;
};

export { Line };
