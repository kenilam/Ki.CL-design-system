import React, { Suspense } from 'react';

import { Heading, Spinner } from 'design/components';

import { Status404 } from 'design/status';

import { Header } from './header';
import { COMPONENTS, Pre } from 'design/docs/mdx';

import { useTokenContext } from './use-token-context';

const Contents: React.FunctionComponent = () => {
  const { Content, name } = useTokenContext();

  if (!Content) {
    return <Status404 />;
  }

  return (
    <>
      <Header />
      <Heading>{name}</Heading>
      <Suspense fallback={<Spinner />}>
        <Content components={{ ...COMPONENTS, pre: Pre }} />
      </Suspense>
    </>
  );
};

export { Contents };
