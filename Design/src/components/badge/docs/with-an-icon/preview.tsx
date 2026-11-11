import React from 'react';

import { Badge } from 'design/components';

import * as Tb from 'react-icons/tb';

import type { Props } from 'design/components/badge/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Badge {...props}>
      <Tb.TbStar aria-hidden />
      Featured
    </Badge>
  );
};

export { Preview };
