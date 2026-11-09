import React from 'react';

import { Badge } from 'design/components';

import * as Bs from 'react-icons/bs';

import type { Props } from 'design/components/badge/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Badge {...props}>
      <Bs.BsStar aria-hidden />
      Featured
    </Badge>
  );
};

export { Preview };
