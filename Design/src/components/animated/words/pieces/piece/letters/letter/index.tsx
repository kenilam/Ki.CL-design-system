import React from 'react';

import classNames from 'classnames';

import { Animation } from 'design/components';

import { useMotion } from 'design/components/animated/words/use-motion';

import { Glyph } from './glyph';
import { Scrambled } from './scrambled';
import { useScramble } from './use-scramble';

type Props = { at: number };

const Letter: React.FunctionComponent<Props> = ({ at }) => {
  const toMotion = useMotion();
  const { glyph, start, stop } = useScramble(at);

  return (
    <Animation {...toMotion(at)}>
      <span
        aria-hidden
        className={classNames('kicl-display-inline-block', {
          'kicl-position-relative': glyph !== null,
        })}
        onTransitionCancel={stop}
        onTransitionEnd={stop}
        onTransitionRun={start}
      >
        {glyph === null ? (
          <Glyph at={at} />
        ) : (
          <Scrambled at={at}>{glyph}</Scrambled>
        )}
      </span>
    </Animation>
  );
};

export { Letter };
