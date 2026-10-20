import React, { Suspense } from 'react';

import { Heading, Spinner } from 'design/components';

import { Status404 } from 'design/status';

import { Header } from './header';
import { COMPONENTS, Pre } from 'design/docs/mdx';

import { usePatternContext } from './use-pattern-context';

const Contents: React.FunctionComponent = () => {
  const { Content, name } = usePatternContext();

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
