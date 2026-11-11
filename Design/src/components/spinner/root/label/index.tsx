import React from 'react';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Context
import { useSpinner } from 'design/components/spinner/context';

const Label: React.FunctionComponent = () => {
  const t = useCopy();
  const { label } = useSpinner();

  return <span className='kicl-hidden'>{label ?? t('status_loading')}</span>;
};

export { Label };
