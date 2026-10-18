import React, { Suspense } from 'react';

// Icons
import * as Ri from 'react-icons/ri';

// Routes
import { useParams } from 'react-router-dom';

// Components
import {
  Heading,
  HyperLink,
  Layout,
  List,
  ListItem,
  Spinner,
  Text,
} from 'design/components';

// Status
import { Status404 } from 'design/status';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsPath } from 'design/docs/base';

// Pages
import { PAGES } from 'design/docs/pages';

// Partials
import { COMPONENTS } from 'design/docs/mdx';

/** A component's page: where it sits, its name, and its MDX. */
const Page: React.FunctionComponent = () => {
  const t = useCopy();
  const path = useDocsPath();
  const { slug } = useParams();

  const page = PAGES.find((page) => page.slug === slug);

  if (!page) {
    return <Status404 />;
  }

  const { Content, context } = page;
  const name = t('component', { context });

  return (
    <Layout alignContent='start' gap='wide' span={9}>
      <article>
        <nav aria-label={t('docs_breadcrumb')}>
          <List
            alignItems='center'
            autoFlow='column'
            gap='narrower'
            is='ol'
            justifyContent='start'
          >
            <ListItem>
              <HyperLink to={path()}>{t('docs_overview')}</HyperLink>
            </ListItem>
            <ListItem alignItems='center' autoFlow='column' gap='narrower'>
              <Ri.RiArrowRightSLine aria-hidden />
              {/* The crumb the reader is on: bold, and not a link, since it goes nowhere. */}
              <Text
                aria-current='page'
                className='kicl-font-weight-bold'
                is='span'
              >
                {name}
              </Text>
            </ListItem>
          </List>
        </nav>
        <Heading>{name}</Heading>
        <Suspense fallback={<Spinner />}>
          <Content components={COMPONENTS} />
        </Suspense>
      </article>
    </Layout>
  );
};

export { Page };
