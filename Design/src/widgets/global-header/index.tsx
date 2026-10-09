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
      <CssVariables />
      <Contents hidden={hidden}>{children}</Contents>
    </>
  );
};

export { GlobalHeaderProvider, useGlobalHeaderContext, GlobalHeader };
