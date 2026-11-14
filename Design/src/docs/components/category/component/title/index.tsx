import React from 'react';

import { useComponentContext } from 'design/docs/components/category/component/use-component-context';

import { Plain } from './plain';
import { Switch } from './switch';

const VERSIONS = { true: Switch, false: Plain };

const Title: React.FunctionComponent = () => {
  const { parts } = useComponentContext();
  const Version = VERSIONS[String(parts.length > 0) as 'false' | 'true'];

  return <Version />;
};

export { Title };
