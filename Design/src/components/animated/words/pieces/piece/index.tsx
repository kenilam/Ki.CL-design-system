import React from 'react';

import { useAnimated } from 'design/components/animated/context';
import { usePiece } from 'design/components/animated/words/context';
import { splitsIntoLetters } from 'design/components/animated/words/foreign';

import { Letters } from './letters';
import { Word } from './word';

type Props = { offset: number };

const VERSIONS = { letter: Letters, word: Word };

const Piece: React.FunctionComponent<Props> = ({ offset }) => {
  const { split } = useAnimated();
  const { joined, text } = usePiece(offset);
  const Version = VERSIONS[splitsIntoLetters(text) ? split : 'word'];

  return (
    <>
      {joined ? <wbr /> : null}
      <Version offset={offset} />
    </>
  );
};

export { Piece, type Props };
