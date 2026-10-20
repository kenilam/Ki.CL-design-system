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

// Hooks
import { useResponsive } from 'design/hooks';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsContext } from 'design/docs/context';

// Pages
import { PAGES, type Category } from 'design/docs/components/pages';

// Constants
import { PATH } from 'design/docs/components/constants';

const Explore: React.FunctionComponent = () => {
  const t = useCopy();
  const { parsePath } = useDocsContext();
  const { isMobile, isTablet } = useResponsive();

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
          <List fill={isMobile ? 12 : isTablet ? 6 : 4} gap='normal'>
            {pages.map(([component, { context }]) => (
              <Card
                header={
                  <>
                    <CardTitle is='h4'>
                      <HyperLink
                        to={parsePath(`${PATH}/${category}/${component}`)}
                      >
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
