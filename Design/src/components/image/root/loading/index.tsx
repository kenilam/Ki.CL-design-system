import React from 'react';

// Components
import { Spinner } from 'design/components';

// Context
import { useImage } from 'design/components/image/context';

const Loading: React.FunctionComponent = () => {
  const { isLoading } = useImage();

  return (
    <Spinner
      className='kicl-font-size-large'
      in={isLoading}
      duration='faster'
    />
  );
};

export { Loading };
