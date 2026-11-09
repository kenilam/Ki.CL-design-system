import React from 'react';
import * as Bs from 'react-icons/bs';

import { HyperLink } from 'design/components';

import type { Props } from 'design/components/hyper-link/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <HyperLink
      before={<Bs.BsGithub aria-hidden />}
      to='https://github.com'
      {...props}
    >
      GitHub
    </HyperLink>
  );
};

export { Preview };
