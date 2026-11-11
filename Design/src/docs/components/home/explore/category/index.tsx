import React from 'react';

// Components
import { Heading, Layout, List } from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Pages
import { PAGES, type Category as CategoryName } from 'design/component-pages';

// Partials
import { Page } from './page';

type Props = { category: CategoryName };

const Category: React.FunctionComponent<Props> = ({ category }) => {
  const t = useCopy();
  const { isNarrow, isNormal } = useResponsive();
  const pages = Object.keys(PAGES[category]);

  if (!pages.length) {
    return null;
  }

  return (
    <Layout gap='normal'>
      <section>
        <Heading is='h3'>{t(`category_${category}`)}</Heading>
        <List fill={isNarrow ? 12 : isNormal ? 6 : 4} gap='normal'>
          {pages.map((component) => {
            return (
              <Page category={category} key={component} component={component} />
            );
          })}
        </List>
      </section>
    </Layout>
  );
};

export { Category };
