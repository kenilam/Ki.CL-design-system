import React from 'react';

import { ShareButton } from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Omit<Props, 'lookLikeHyperLink' | 'unstyled'>> = (
  props
) => {
  return (
    <ShareButton
      showLabel
      value='https://ki-cl.com/design'
      variant='secondary'
      {...props}
    />
  );
};

export { Preview };
