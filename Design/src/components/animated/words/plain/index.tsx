import React from 'react';

import { useWords } from 'design/components/animated/words/context';
import { toSpans } from 'design/components/animated/words/model';

const Plain: React.FunctionComponent = () => {
  const { marks, plain } = useWords();

  return toSpans(plain, marks, 0).map(({ at, strong, text }) => {
    return strong === null ? (
      <React.Fragment key={at}>{text}</React.Fragment>
    ) : (
      <strong key={at}>{text}</strong>
    );
  });
};

export { Plain };
