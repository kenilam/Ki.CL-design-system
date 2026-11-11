import React from 'react';

// Context
import { useVariables } from 'design/docs/tokens/variables/context';

const Probe: React.FunctionComponent = () => {
  const { probe, scope } = useVariables();

  return React.createElement(scope, {
    'aria-hidden': true,
    className: 'kicl-hidden',
    ref: probe,
  });
};

export { Probe };
