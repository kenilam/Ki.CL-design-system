import React from 'react';

// Context
import { usePageIndicator } from 'design/components/page-indicator/context';

// Partials
import { Page } from './page';

const Pages: React.FunctionComponent = () => {
  const pages = usePageIndicator();

  return pages.map(({ id }) => {
    return <Page id={id} key={id} />;
  });
};

export { Pages };
