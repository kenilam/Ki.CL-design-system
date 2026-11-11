import React from 'react';

// Context
import { useImage } from 'design/components/image/context';

const Alt: React.FunctionComponent = () => {
  const { alt, hasError } = useImage();

  return hasError && alt ? <span className='kicl-hidden'>{alt}</span> : null;
};

export { Alt };
