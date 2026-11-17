import React, { PropsWithChildren } from 'react';

import { Animation, HyperLink } from 'design/components';

import { useAnimated } from 'design/components/animated/context';
import { CLASS_NAME } from 'design/components/animated/constants';
import { usePiece, useWords } from 'design/components/animated/words/context';
import { useMotion } from 'design/components/animated/words/use-motion';

type Props = PropsWithChildren<{ link: number; offset: number }>;

/**
 * The line under the spaces between its words fades in with the first word,
 * so no part of it shows before the text it belongs to.
 */
const Link: React.FunctionComponent<Props> = ({ children, link, offset }) => {
  const { split } = useAnimated();
  const { hrefs, labels } = useWords();
  const { order } = usePiece(offset);
  const toMotion = useMotion();

  return (
    <Animation
      {...toMotion(split === 'letter' ? offset : order)}
      property='fade'
    >
      <HyperLink className={`${CLASS_NAME}__link`} to={hrefs[link]}>
        <span className='kicl-hidden'>{labels[link]}</span>
        {children}
      </HyperLink>
    </Animation>
  );
};

export { Link };
