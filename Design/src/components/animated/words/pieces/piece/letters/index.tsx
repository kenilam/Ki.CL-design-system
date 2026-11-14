import React from 'react';

import { usePiece } from 'design/components/animated/words/context';

import type { Props } from 'design/components/animated/words/pieces/piece';

import { Letter } from './letter';

const Letters: React.FunctionComponent<Props> = ({ offset }) => {
  const { text } = usePiece(offset);

  return (
    <span className='kicl-text-nowrap'>
      {text.split('').map((_, place) => {
        return <Letter at={offset + place} key={offset + place} />;
      })}
    </span>
  );
};

export { Letters };
