import React from 'react';

// Components
import { Heading } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

const Home: React.FunctionComponent = () => {
  const t = useCopy();

  return <Heading>{t('docs_title')}</Heading>;
};

export { Home };
