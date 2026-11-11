import React from 'react';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Context
import { useStatus } from 'design/components/status/context';

const Text: React.FunctionComponent = () => {
  const t = useCopy();
  const { level, title } = useStatus();

  return title || t(`title_${level ?? 'error'}`);
};

export { Text };
