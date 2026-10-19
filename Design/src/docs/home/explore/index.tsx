import React from 'react';

// Components
import {
  Card,
  CardDescription,
  CardTitle,
  Heading,
  HyperLink,
  Layout,
  List,
} from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsPath } from 'design/docs/base';

// Pages
import { pagesIn } from 'design/docs/pages';

// Constants
import { CATEGORIES, type Category } from 'design/docs/constants';

const Explore: React.FunctionComponent = () => {
  const t = useCopy();
  const path = useDocsPath();

  return (Object.keys(CATEGORIES) as Category[]).map((category) => {
    const pages = pagesIn(category);

    if (!pages.length) {
      return null;
    }

    return (
      <Layout gap='normal' key={category}>
        <section>
          <Heading is='h3'>{t(`category_${category}`)}</Heading>
          <List fill={4} gap='normal'>
            {pages.map(({ context, slug }) => (
              <Card
                header={
                  <>
                    <CardTitle is='h4'>
                      <HyperLink to={path(slug)}>
                        {t('component', { context })}
                      </HyperLink>
                    </CardTitle>
                    <CardDescription>
                      {t('component_summary', { context })}
                    </CardDescription>
                  </>
                }
                is='li'
                key={slug}
              />
            ))}
          </List>
        </section>
      </Layout>
    );
  });
};

export { Explore };
