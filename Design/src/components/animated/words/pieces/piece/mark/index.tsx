import React from 'react';

import { HyperLinkLine } from 'design/components';

import type { toSpans } from 'design/components/animated/words/model';

type Props = Pick<ReturnType<typeof toSpans>[number], 'link' | 'strong'> & {
  children: string;
};

const Mark: React.FunctionComponent<Props> = ({ children, link, strong }) => {
  const text =
    strong === null ? (
      children
    ) : (
      <strong data-strong={strong}>{children}</strong>
    );

  return link === null ? text : <HyperLinkLine>{text}</HyperLinkLine>;
};

export { Mark };
