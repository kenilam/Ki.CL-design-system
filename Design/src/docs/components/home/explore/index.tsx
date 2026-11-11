import React from 'react';

// Pages
import { PAGES, type Category as CategoryName } from 'design/component-pages';

// Partials
import { Category } from './category';

const Explore: React.FunctionComponent = () => {
  return (Object.keys(PAGES) as CategoryName[]).map((category) => {
    return <Category category={category} key={category} />;
  });
};

export { Explore };
