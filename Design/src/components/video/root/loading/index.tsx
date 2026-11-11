import React from 'react';

// Components
import { Spinner } from 'design/components';

// Context
import { useStatus } from 'design/components/video/context';

const Loading: React.FunctionComponent = () => {
  const { loading } = useStatus();

  return <Spinner in={loading} />;
};

export { Loading };
