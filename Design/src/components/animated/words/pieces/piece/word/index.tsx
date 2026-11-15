import React from 'react';

import { Animation } from 'design/components';

import { usePiece } from 'design/components/animated/words/context';
import { useMotion } from 'design/components/animated/words/use-motion';

import type { Props } from 'design/components/animated/words/pieces/piece';
import { Mark } from 'design/components/animated/words/pieces/piece/mark';

const Word: React.FunctionComponent<Props> = ({ offset }) => {
  const { order, spans } = usePiece(offset);
  const toMotion = useMotion();

  return (
    <Animation {...toMotion(order)}>
      <span aria-hidden className='kicl-display-inline-block'>
        {spans.map(({ at, link, strong, text }) => {
          return (
            <Mark key={at} link={link} strong={strong}>
              {text}
            </Mark>
          );
        })}
      </span>
    </Animation>
  );
};

export { Word };
