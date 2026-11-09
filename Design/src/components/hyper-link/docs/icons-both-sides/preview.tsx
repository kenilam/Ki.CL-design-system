import React from 'react';
import * as Bs from 'react-icons/bs';

import { HyperLink } from 'design/components';

import type { Props } from 'design/components/hyper-link/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <HyperLink
      after={<Bs.BsBoxArrowUpRight aria-hidden />}
      before={<Bs.BsGithub aria-hidden />}
      to='https://github.com'
      {...props}
    >
      Source on GitHub
    </HyperLink>
  );
};

export { Preview };
