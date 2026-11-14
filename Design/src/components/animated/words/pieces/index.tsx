import React from 'react';

import { useWords } from 'design/components/animated/words/context';

import { Piece } from './piece';

const Pieces: React.FunctionComponent = () => {
  const { pieces } = useWords();

  return pieces.map(({ offset, space, text }) => {
    return space ? text : <Piece key={offset} offset={offset} />;
  });
};

export { Pieces };
