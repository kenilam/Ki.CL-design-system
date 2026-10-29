import React from 'react';

import { Badge, Menu } from 'design/components';

import type { Props } from 'design/components/badge/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Menu aria-label='Tags' gap='narrow'>
      <Badge is='button' {...props}>
        React
      </Badge>
      <Badge is='button' {...props}>
        TypeScript
      </Badge>
      <Badge is='button' {...props}>
        Sass
      </Badge>
    </Menu>
  );
};

export { Preview };
