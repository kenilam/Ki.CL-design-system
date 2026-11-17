import React from 'react';

import { CLASS_NAME } from 'design/components/animated/constants';
import { useWords } from 'design/components/animated/words/context';

import { Link } from './link';
import { Piece } from './piece';

const Pieces: React.FunctionComponent = () => {
  const { runs } = useWords();

  return runs.map(({ link, pieces }) => {
    const [{ offset: key }] = pieces;
    const run = pieces.map(({ offset, space, text }) => {
      if (!space) {
        return <Piece key={offset} offset={offset} />;
      }

      // Inside a link a space carries the same line as the words around it.
      return link === null ? (
        text
      ) : (
        <span className={`${CLASS_NAME}__space`} key={offset}>
          {text}
        </span>
      );
    });

    return link === null ? (
      <React.Fragment key={key}>{run}</React.Fragment>
    ) : (
      <Link key={key} link={link} offset={key}>
        {run}
      </Link>
    );
  });
};

export { Pieces };
