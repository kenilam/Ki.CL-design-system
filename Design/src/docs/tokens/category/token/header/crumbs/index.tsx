import React from 'react';

// Components
import { Breadcrumb } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { useDocsCrumbs } from 'design/docs/sections';
import { TOKENS_PATH as PATH } from 'design/docs/paths';
import { useTokenContext } from 'design/docs/tokens/category/token/use-token-context';

const Crumbs: React.FunctionComponent = () => {
  const t = useCopy();
  const { category, name } = useTokenContext();

  return (
    <Breadcrumb
      crumbs={useDocsCrumbs(
        PATH,
        category ? t(`category_${category}`) : undefined
      )}
      current={name}
    />
  );
};

export { Crumbs };
