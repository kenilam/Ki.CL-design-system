import React from 'react';

import { HomeLink, type HomeLinkProps } from 'design/components';

const Preview: React.FC<
  Pick<HomeLinkProps, 'level' | 'showLabel' | 'size' | 'variant'>
> = (props) => <HomeLink to='#' {...props} />;

export { Preview };
