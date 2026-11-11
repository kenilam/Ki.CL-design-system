import React from 'react';

// Context
import { useBreadcrumb } from 'design/components/breadcrumb/context';

// Partials
import { Crumb } from './crumb';

const Crumbs: React.FunctionComponent = () => {
  const { crumbs, fitted } = useBreadcrumb();

  return crumbs.slice(fitted).map(({ name }) => {
    return <Crumb key={name} name={name} />;
  });
};

export { Crumbs };
