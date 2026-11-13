import React from 'react';

import { CopyButton } from 'design/components';

import type { ButtonProps } from 'design/components';
import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<
  Omit<Props, 'lookLikeHyperLink' | 'unstyled'> & Pick<ButtonProps, 'block'>
> = (props) => {
  return <CopyButton value='npm install @ki-cl/design' {...props} />;
};

export { Preview };
