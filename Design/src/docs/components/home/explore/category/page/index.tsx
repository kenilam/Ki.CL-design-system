import React from 'react';

// Components
import { Card, CardDescription, CardTitle, HyperLink } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsContext } from 'design/mdx/context';

// Pages
import { PAGES, type Category } from 'design/component-pages';

// Constants
import { COMPONENTS_PATH as PATH } from 'design/docs/paths';

type Props = { category: Category; component: string };

const Page: React.FunctionComponent<Props> = ({ category, component }) => {
  const t = useCopy();
  const { parsePath } = useDocsContext();
  const pages: Record<string, { context: string }> = PAGES[category];
  const { context } = pages[component];

  return (
    <Card
      header={
        <>
          <CardTitle is='h4'>
            <HyperLink to={parsePath(`${PATH}/${category}/${component}`)}>
              {t('component', { context })}
            </HyperLink>
          </CardTitle>
          <CardDescription>
            {t('component_summary', { context })}
          </CardDescription>
        </>
      }
      is='li'
    />
  );
};

export { Page };
