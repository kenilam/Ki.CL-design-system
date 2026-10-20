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
import { useDocsContext } from 'design/docs/context';

// Pages
import { PAGES, type Category } from 'design/docs/pages';

const Explore: React.FunctionComponent = () => {
  const t = useCopy();
  const { parsePath } = useDocsContext();

  return (Object.keys(PAGES) as Category[]).map((category) => {
    const group = PAGES[category];
    const pages = Object.entries(group);

    if (!pages.length) {
      return null;
    }

    return (
      <Layout gap='normal' key={category}>
        <section>
          <Heading is='h3'>{t(`category_${category}`)}</Heading>
          <List fill={4} gap='normal'>
            {pages.map(([component, { context }]) => (
              <Card
                header={
                  <>
                    <CardTitle is='h4'>
                      <HyperLink to={parsePath(`${category}/${component}`)}>
                        {t('component', { context })}
                      </HyperLink>
                    </CardTitle>
                    <CardDescription>
                      {t('component_summary', { context })}
                    </CardDescription>
                  </>
                }
                is='li'
                key={component}
              />
            ))}
          </List>
        </section>
      </Layout>
    );
  });
};

export { Explore };
