import React from 'react';

// Components
import { HomeLink, Heading, Layout } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Hooks
import { useResponsive } from 'design/hooks';

// Paths
import { useDocsContext } from 'design/docs/context';

// Partials
import { COMPONENTS, Pre } from 'design/docs/mdx';
import { Explore } from './explore';
import Welcome from './welcome.mdx';

/** The welcome, then every token page by its group. */
const Home: React.FunctionComponent = () => {
  const t = useCopy();
  const { parsePath } = useDocsContext();
  const { isMobile } = useResponsive();

  return (
    <Layout alignContent='start' gap='wide'>
      <article>
        <Layout
          alignItems={isMobile ? 'start' : 'center'}
          autoFlow={isMobile ? 'row' : 'column'}
          gap='normal'
          justifyContent='start'
          justifyItems='start'
        >
          <header>
            <HomeLink showLabel={isMobile} to={parsePath()} />
            <Heading>{t('docs_title', { context: 'tokens' })}</Heading>
          </header>
        </Layout>
        <Welcome components={{ ...COMPONENTS, Explore, pre: Pre }} />
      </article>
    </Layout>
  );
};

export { Home };
