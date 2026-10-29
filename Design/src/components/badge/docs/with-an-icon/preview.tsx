import React from 'react';

import { Badge } from 'design/components';

import * as Ri from 'react-icons/ri';

import type { Props } from 'design/components/badge/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Badge {...props}>
      <Ri.RiStarLine aria-hidden />
      Featured
    </Badge>
  );
};

export { Preview };
