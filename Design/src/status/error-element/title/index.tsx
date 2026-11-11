import React from 'react';

// Components
import { Heading } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

const Title: React.FunctionComponent = () => {
  const t = useCopy();

  return (
    <Heading dense is='h2' lookLike='h4'>
      {t('title_error')}
    </Heading>
  );
};

export { Title };
