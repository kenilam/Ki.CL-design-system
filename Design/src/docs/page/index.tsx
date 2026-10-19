import React, { Suspense } from 'react';

// Routes
import { useParams } from 'react-router-dom';

// Components
import {
  Heading,
  Layout,
  Spinner,
} from 'design/components';

// Status
import { Status404 } from 'design/status';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Pages
import { PAGES } from 'design/docs/pages';

// Partials
import { COMPONENTS } from 'design/docs/mdx';
import { Header } from './header';

/** A component's page: the menu and where it sits, its name, and its MDX. */
const Page: React.FunctionComponent = () => {
  const t = useCopy();

  const { page: slug } = useParams();

  const page = PAGES.find((page) => page.slug === slug);

  if (!page) {
    return <Status404 />;
  }

  const { Content, context } = page;
  const name = t('component', { context });

  return (
    <Layout alignItems='center' autoFlow='row' gap='narrow'>
      <article className='kicl-background-color-body'>
        <Header />
        <Heading>{name}</Heading>
        <Suspense fallback={<Spinner />}>
          <Content components={COMPONENTS} />
        </Suspense>
      </article>
    </Layout>
  );
};

export { Page };
