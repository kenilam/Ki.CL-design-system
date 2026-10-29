import React from 'react';
import * as Ri from 'react-icons/ri';

import { HyperLink } from 'design/components';

import type { Props } from 'design/components/hyper-link/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <HyperLink
      after={<Ri.RiExternalLinkLine aria-hidden />}
      before={<Ri.RiGithubLine aria-hidden />}
      to='https://github.com'
      {...props}
    >
      Source on GitHub
    </HyperLink>
  );
};

export { Preview };
