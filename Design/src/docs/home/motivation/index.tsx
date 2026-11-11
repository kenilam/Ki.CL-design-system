import React from 'react';

// Components
import { Layout } from 'design/components';

// Partials
import { COMPONENTS, Pre } from 'design/mdx';
import Words from './motivation.mdx';

const Motivation: React.FunctionComponent = () => {
  return (
    <Layout gap='normal'>
      <section className='kicl-max-inline-size-columns-8'>
        <Words components={{ ...COMPONENTS, pre: Pre }} />
      </section>
    </Layout>
  );
};

export { Motivation };
