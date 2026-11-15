import React from 'react';

import { Animation } from 'design/components';

import { usePiece, useWords } from 'design/components/animated/words/context';
import { Mark } from 'design/components/animated/words/pieces/piece/mark';
import { useMotion } from 'design/components/animated/words/use-motion';

type Props = { at: number };

const Letter: React.FunctionComponent<Props> = ({ at }) => {
  const { links, marks } = useWords();
  const { offset, text } = usePiece(at);
  const toMotion = useMotion();

  return (
    <Animation {...toMotion(at)}>
      <span aria-hidden className='kicl-display-inline-block'>
        <Mark link={links[at] ?? null} strong={marks[at] ?? null}>
          {text[at - offset]}
        </Mark>
      </span>
    </Animation>
  );
};

export { Letter };
