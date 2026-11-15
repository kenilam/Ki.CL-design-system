import React from 'react';

import { useWords } from 'design/components/animated/words/context';

import { Link } from './link';
import { Piece } from './piece';

const Pieces: React.FunctionComponent = () => {
  const { runs } = useWords();

  return runs.map(({ link, pieces }) => {
    const [{ offset: key }] = pieces;
    const run = pieces.map(({ offset, space, text }) => {
      return space ? text : <Piece key={offset} offset={offset} />;
    });

    return link === null ? (
      <React.Fragment key={key}>{run}</React.Fragment>
    ) : (
      <Link key={key} link={link}>
        {run}
      </Link>
    );
  });
};

export { Pieces };
