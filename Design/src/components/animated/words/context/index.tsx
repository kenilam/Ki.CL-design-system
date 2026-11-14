import React, { createContext, PropsWithChildren, useContext } from 'react';

import { useAnimated } from 'design/components/animated/context';

import {
  toMarked,
  toPieces,
  toSpans,
} from 'design/components/animated/words/model';
import { useDirection } from 'design/components/animated/words/use-direction';

type Value = Pick<ReturnType<typeof useDirection>, 'ref'> &
  ReturnType<typeof toMarked> & { pieces: ReturnType<typeof toPieces> };

const WordsContext = createContext<Value | null>(null);

const Provider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { text } = useAnimated();
  const { direction, ref } = useDirection();
  const marked = toMarked(text ?? '');

  return (
    <WordsContext.Provider
      value={{ ...marked, pieces: toPieces(marked.plain, direction), ref }}
    >
      {children}
    </WordsContext.Provider>
  );
};

const useWords = () => {
  const words = useContext(WordsContext);

  if (!words) {
    throw new Error('useWords needs the Words provider around it.');
  }

  return words;
};

const usePiece = (offset: number) => {
  const { marks, pieces } = useWords();
  const piece = pieces.find((each) => {
    return each.offset <= offset && offset < each.offset + each.text.length;
  });

  if (!piece) {
    throw new Error(`No piece of the text covers ${offset}.`);
  }

  return { ...piece, spans: toSpans(piece.text, marks, piece.offset) };
};

export { Provider, usePiece, useWords };
