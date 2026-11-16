import React from 'react';

import { usePiece, useWords } from 'design/components/animated/words/context';
import { Mark } from 'design/components/animated/words/pieces/piece/mark';

type Props = { at: number; children?: string };

const Glyph: React.FunctionComponent<Props> = ({ at, children }) => {
  const { links, marks } = useWords();
  const { offset, text } = usePiece(at);

  return (
    <Mark link={links[at] ?? null} strong={marks[at] ?? null}>
      {children ?? text[at - offset]}
    </Mark>
  );
};

export { Glyph };
