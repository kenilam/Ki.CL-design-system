import React from 'react';

import { SearchInput } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return <SearchInput aria-label='Search' {...props} />;
};

export { Preview };
