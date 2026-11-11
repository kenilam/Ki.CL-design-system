import React from 'react';

// Components
import { Breadcrumb } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { useDocsCrumbs } from 'design/docs/sections';
import { PATTERNS_PATH as PATH } from 'design/docs/paths';
import { usePatternContext } from 'design/docs/patterns/category/pattern/use-pattern-context';

const Crumbs: React.FunctionComponent = () => {
  const t = useCopy();
  const { category, name } = usePatternContext();

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
