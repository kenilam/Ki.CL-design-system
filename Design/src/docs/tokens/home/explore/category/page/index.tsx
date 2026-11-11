import React from 'react';

// Components
import { Card, CardDescription, CardTitle, HyperLink } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsContext } from 'design/mdx/context';

// Pages
import { PAGES, type Category } from 'design/token-pages';

// Constants
import { TOKENS_PATH as PATH } from 'design/docs/paths';

type Props = { category: Category; token: string };

const Page: React.FunctionComponent<Props> = ({ category, token }) => {
  const t = useCopy();
  const { parsePath } = useDocsContext();
  const pages: Record<string, { context: string }> = PAGES[category];
  const { context } = pages[token];

  return (
    <Card
      header={
        <>
          <CardTitle is='h4'>
            <HyperLink to={parsePath(`${PATH}/${category}/${token}`)}>
              {t('token', { context })}
            </HyperLink>
          </CardTitle>
          <CardDescription>{t('token_summary', { context })}</CardDescription>
        </>
      }
      is='li'
    />
  );
};

export { Page };
