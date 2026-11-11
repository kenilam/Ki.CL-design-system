import React from 'react';

// Components
import { Card, CardDescription, CardTitle, HyperLink } from 'design/components';

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
  const pages: Record<string, { context: string }> = PAGES[category];
  const { context } = pages[pattern];

  return (
    <Card
      header={
        <>
          <CardTitle is='h4'>
            <HyperLink to={parsePath(`${PATH}/${category}/${pattern}`)}>
              {t('pattern', { context })}
            </HyperLink>
          </CardTitle>
          <CardDescription>{t('pattern_summary', { context })}</CardDescription>
        </>
      }
      is='li'
    />
  );
};

export { Page };
