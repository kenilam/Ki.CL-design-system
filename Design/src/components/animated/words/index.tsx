import React from 'react';

import { useAnimated } from 'design/components/animated/context';

import { Provider } from './context';
import { Hidden } from './hidden';
import { Pieces } from './pieces';
import { Plain } from './plain';

const Words: React.FunctionComponent = () => {
  const { replaced, text } = useAnimated();

  if (text === null) {
    return null;
  }

  return (
    <Provider>
      {replaced ? (
        <Plain />
      ) : (
        <>
          <Hidden />
          <Pieces />
        </>
      )}
    </Provider>
  );
};

export { Words };
