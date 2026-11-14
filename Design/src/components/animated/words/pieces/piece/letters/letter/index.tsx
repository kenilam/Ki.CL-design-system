import React from 'react';

import { Animation } from 'design/components';

import { usePiece, useWords } from 'design/components/animated/words/context';
import { useMotion } from 'design/components/animated/words/use-motion';

type Props = { at: number };

const Letter: React.FunctionComponent<Props> = ({ at }) => {
  const { marks } = useWords();
  const { offset, text } = usePiece(at);
  const toMotion = useMotion();
  const strong = marks[at] ?? null;
  const letter = text[at - offset];

  return (
    <Animation {...toMotion(at)}>
      <span aria-hidden className='kicl-display-inline-block'>
        {strong === null ? (
          letter
        ) : (
          <strong data-strong={strong}>{letter}</strong>
        )}
      </span>
    </Animation>
  );
};

export { Letter };
