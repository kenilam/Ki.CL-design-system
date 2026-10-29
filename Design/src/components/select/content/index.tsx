import React from 'react';

// Styles
import './styles.scss';

import type { SelectContentProps } from 'design/components/select/spec';

/** No wrapper: one would hide the options from browsers without base-select. */
const SelectContent: React.FunctionComponent<SelectContentProps> = ({
  children,
}) => {
  return <>{children}</>;
};

SelectContent.displayName = 'SelectContent';

export { SelectContent };
