import React from 'react';

// Copy
import { useCopy } from 'design/locales/use-copy';

const NewTab: React.FunctionComponent = () => {
  const t = useCopy();

  return <span className='kicl-hidden'> {t('new_tab')}</span>;
};

export { NewTab };
