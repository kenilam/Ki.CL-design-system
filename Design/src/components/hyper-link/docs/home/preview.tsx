import React from 'react';

import { HomeLink, type HomeLinkProps } from 'design/components';

const Preview: React.FC<
  Pick<HomeLinkProps, 'level' | 'size' | 'variant'> &
    ({ block?: boolean; showLabel?: false } | { showLabel: true })
> = (props) => {
  return <HomeLink to='#' {...props} />;
};

export { Preview };
