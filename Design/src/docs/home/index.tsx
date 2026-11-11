import React from 'react';

// Components
import { Layout } from 'design/components';

// Partials
import { Explore } from './explore';
import { Intro } from './intro';
import { Motivation } from './motivation';

const Home: React.FunctionComponent = () => {
  return (
    <Layout alignContent='start' gap='wider'>
      <article>
        <Intro />
        <Explore />
        <Motivation />
      </article>
    </Layout>
  );
};

export { Home };
