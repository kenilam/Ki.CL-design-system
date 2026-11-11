import React from 'react';

// Components
import { HomeLink, Heading, Layout } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Hooks
import { useResponsive } from 'design/hooks';

// Paths
import { useDocsContext } from 'design/mdx/context';

// Partials
import { COMPONENTS, Pre } from 'design/mdx';
import { Explore } from './explore';
import Welcome from './welcome.mdx';

const Home: React.FunctionComponent = () => {
  const t = useCopy();
  const { parsePath } = useDocsContext();
  const { isNarrow } = useResponsive();

  return (
    <Layout alignContent='start' gap='wide'>
      <article>
        <Layout
          alignItems={isNarrow ? 'start' : 'center'}
          autoFlow={isNarrow ? 'row' : 'column'}
          gap='normal'
          justifyContent='start'
          justifyItems='start'
        >
          <header>
            <HomeLink showLabel={isNarrow} to={parsePath()} />
            <Heading>{t('docs_title', { context: 'tokens' })}</Heading>
          </header>
        </Layout>
        <Welcome components={{ ...COMPONENTS, Explore, pre: Pre }} />
      </article>
    </Layout>
  );
};

export { Home };
