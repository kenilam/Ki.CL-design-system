import React from 'react';

// Routes
import { useParams } from 'design/router';

// Components
import { HyperLink, ListItem } from 'design/components';

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
  const params = useParams();
  const pages: Record<string, { context: string }> = PAGES[category];
  const { context } = pages[component];

  return (
    <ListItem>
      <HyperLink
        className='kicl-inline-size-full'
        lookLikeButton
        to={parsePath(`${PATH}/${category}/${component}`)}
        variant={
          category === params.category && component === params.component
            ? 'secondary'
            : 'tertiary'
        }
      >
        {t('component', { context })}
      </HyperLink>
    </ListItem>
  );
};

export { Page };
