import React, { Suspense } from 'react';

import { Spinner } from 'design/components';

import { Status404 } from 'design/status';

import { Header } from './header';
import { Title } from './title';
import { COMPONENTS } from 'design/mdx';

import { useComponentContext } from './use-component-context';

const Contents: React.FunctionComponent = () => {
  const { Content } = useComponentContext();

  if (!Content) {
    return <Status404 />;
  }

  return (
    <>
      <Header />
      <Title />
      <Suspense fallback={<Spinner />}>
        <Content components={COMPONENTS} />
      </Suspense>
    </>
  );
};

export { Contents };
