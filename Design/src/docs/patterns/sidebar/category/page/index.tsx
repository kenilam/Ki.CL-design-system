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
import { PAGES, type Category } from 'design/pattern-pages';

// Constants
import { PATTERNS_PATH as PATH } from 'design/docs/paths';

type Props = { category: Category; pattern: string };

const Page: React.FunctionComponent<Props> = ({ category, pattern }) => {
  const t = useCopy();
  const { parsePath } = useDocsContext();
  const params = useParams();
  const pages: Record<string, { context: string }> = PAGES[category];
  const { context } = pages[pattern];

  return (
    <ListItem>
      <HyperLink
        className='kicl-inline-size-full'
        lookLikeButton
        to={parsePath(`${PATH}/${category}/${pattern}`)}
        variant={
          category === params.category && pattern === params.pattern
            ? 'secondary'
            : 'tertiary'
        }
      >
        {t('pattern', { context })}
      </HyperLink>
    </ListItem>
  );
};

export { Page };
