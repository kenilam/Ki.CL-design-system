import React from 'react';

// Partials
import { Contents } from './contents';
import { CssVariables } from './css-variables';

// Context
import { useGlobalHeaderContext, GlobalHeaderProvider } from './context';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';

const GlobalHeader: React.FunctionComponent<Spec.GlobalHeaderProps> = ({
  children,
  hidden,
}) => {
  return (
    <>
      {/* Rendered even when hidden, so the next page has the height at once. */}
      <CssVariables />
      {hidden ? null : <Contents>{children}</Contents>}
    </>
  );
};

export { GlobalHeaderProvider, useGlobalHeaderContext, GlobalHeader };
