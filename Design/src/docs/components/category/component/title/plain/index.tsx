import React from 'react';

import { Heading } from 'design/components';

import { useComponentContext } from 'design/docs/components/category/component/use-component-context';

const Plain: React.FunctionComponent = () => {
  const { name } = useComponentContext();

  return <Heading>{name}</Heading>;
};

export { Plain };
