import React from 'react';

import { useWords } from 'design/components/animated/words/context';
import { Plain } from 'design/components/animated/words/plain';

const Hidden: React.FunctionComponent = () => {
  const { ref } = useWords();

  return (
    <span className='kicl-hidden' ref={ref}>
      <Plain />
    </span>
  );
};

export { Hidden };
