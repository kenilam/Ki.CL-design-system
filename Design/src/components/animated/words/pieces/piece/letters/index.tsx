import React from 'react';

import { usePiece } from 'design/components/animated/words/context';
import { toDirection } from 'design/components/animated/words/foreign';

import type { Props } from 'design/components/animated/words/pieces/piece';

import { Letter } from './letter';

const GAP = /(\s+)/;

const Letters: React.FunctionComponent<Props> = ({ offset }) => {
  const { text } = usePiece(offset);

  return (
    <span dir={toDirection(text)}>
      {text.split(GAP).map((part, index, parts) => {
        const start = offset + parts.slice(0, index).join('').length;

        return index % 2 === 1 ? (
          part
        ) : (
          <span className='kicl-text-nowrap' key={start}>
            {part.split('').map((_, place) => {
              return <Letter at={start + place} key={start + place} />;
            })}
          </span>
        );
      })}
    </span>
  );
};

export { Letters };
