import React, { Suspense } from 'react';

import { Heading, Spinner } from 'design/components';

import { Status404 } from 'design/status';

import { Header } from './header';
import { COMPONENTS } from 'design/docs/mdx';

import { useComponentContext } from './use-component-context';

const Contents: React.FunctionComponent = () => {
  const { Content, name } = useComponentContext();

  if (!Content) {
    return <Status404 />;
  }

  return (
    <>
      <Header />
      <Heading>{name}</Heading>
      <Suspense fallback={<Spinner />}>
        <Content components={COMPONENTS} />
      </Suspense>
    </>
  );
};

export { Contents };
