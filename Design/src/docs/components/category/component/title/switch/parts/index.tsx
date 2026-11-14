import React from 'react';

import { useComponentContext } from 'design/docs/components/category/component/use-component-context';

import { Part } from './part';

const Parts: React.FunctionComponent = () => {
  const { parts } = useComponentContext();

  return parts.map((part) => {
    return <Part key={part} part={part} />;
  });
};

export { Parts };
