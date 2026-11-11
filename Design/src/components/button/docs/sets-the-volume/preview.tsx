import React from 'react';

import { VolumeButton } from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Pick<Props, 'size' | 'variant'>> = (props) => {
  return <VolumeButton defaultValue={0.5} {...props} />;
};

export { Preview };
