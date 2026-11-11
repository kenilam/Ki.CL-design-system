import React from 'react';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { Code } from 'design/mdx/preview/code';
import { useOutput } from './use-output';

const Output: React.FunctionComponent = () => {
  const t = useCopy();
  const output = useOutput();

  return (
    <Code language='markup' title={t('docs_output')}>
      {output}
    </Code>
  );
};

export { Output };
