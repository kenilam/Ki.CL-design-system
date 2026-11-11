import React from 'react';

// Components
import { Breadcrumb } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { useDocsCrumbs } from 'design/docs/sections';
import { COMPONENTS_PATH as PATH } from 'design/docs/paths';
import { useComponentContext } from 'design/docs/components/category/component/use-component-context';

const Crumbs: React.FunctionComponent = () => {
  const t = useCopy();
  const { category, name } = useComponentContext();

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
