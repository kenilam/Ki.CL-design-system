import React from 'react';

// Components
import { HyperLink, ListItem } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsContext } from 'design/mdx/context';

// Constants
import { PATTERNS_PATH as PATH } from 'design/docs/paths';

const Overview: React.FunctionComponent = () => {
  const t = useCopy();
  const { parsePath } = useDocsContext();

  return (
    <ListItem>
      <HyperLink to={parsePath(PATH)}>{t('docs_overview')}</HyperLink>
    </ListItem>
  );
};

export { Overview };
