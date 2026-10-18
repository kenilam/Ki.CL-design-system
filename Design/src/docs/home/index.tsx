import React from 'react';

// Components
import { Heading, Layout } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { COMPONENTS } from 'design/docs/mdx';
import { Explore } from './explore';
import Welcome from './welcome.mdx';

/** The welcome, then every component by its group. */
const Home: React.FunctionComponent = () => {
  const t = useCopy();

  return (
    <Layout alignContent='start' gap='wide' span={9}>
      <article>
        <Heading>{t('docs_title')}</Heading>
        <Welcome components={{ ...COMPONENTS, Explore }} />
      </article>
    </Layout>
  );
};

export { Home };
