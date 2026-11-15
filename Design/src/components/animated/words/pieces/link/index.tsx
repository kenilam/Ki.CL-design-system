import React, { PropsWithChildren } from 'react';

import { HyperLink } from 'design/components';

import { useWords } from 'design/components/animated/words/context';

type Props = PropsWithChildren<{ link: number }>;

const Link: React.FunctionComponent<Props> = ({ children, link }) => {
  const { hrefs, labels } = useWords();

  return (
    <HyperLink to={hrefs[link]}>
      <span className='kicl-hidden'>{labels[link]}</span>
      {children}
    </HyperLink>
  );
};

export { Link };
