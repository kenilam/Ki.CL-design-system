import React from 'react';

import classNames from 'classnames';

import { CLASS_NAME } from 'design/components/animated/constants';

import { Glyph } from 'design/components/animated/words/pieces/piece/letters/letter/glyph';

type Props = { at: number; children: string };

const Scrambled: React.FunctionComponent<Props> = ({ at, children }) => {
  return (
    <>
      <span className='kicl-visibility-hidden'>
        <Glyph at={at} />
      </span>
      <span
        className={classNames('kicl-position-absolute', `${CLASS_NAME}__glyph`)}
      >
        <Glyph at={at}>{children}</Glyph>
      </span>
    </>
  );
};

export { Scrambled };
