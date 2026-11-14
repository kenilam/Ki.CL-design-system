import React from 'react';

import { Animation } from 'design/components';

import { usePiece } from 'design/components/animated/words/context';
import { useMotion } from 'design/components/animated/words/use-motion';

import type { Props } from 'design/components/animated/words/pieces/piece';

const Word: React.FunctionComponent<Props> = ({ offset }) => {
  const { order, spans } = usePiece(offset);
  const toMotion = useMotion();

  return (
    <Animation {...toMotion(order)}>
      <span aria-hidden className='kicl-display-inline-block'>
        {spans.map(({ at, strong, text }) => {
          return strong === null ? (
            <React.Fragment key={at}>{text}</React.Fragment>
          ) : (
            <strong data-strong={strong} key={at}>
              {text}
            </strong>
          );
        })}
      </span>
    </Animation>
  );
};

export { Word };
