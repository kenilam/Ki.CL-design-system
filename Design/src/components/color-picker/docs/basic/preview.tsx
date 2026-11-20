import React from 'react';

import { ColorPicker } from 'design/components';

import type { Props } from 'design/components/color-picker/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return <ColorPicker aria-label='Color' defaultValue='#1d88bd' {...props} />;
};

export { Preview };
