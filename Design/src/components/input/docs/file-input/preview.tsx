import React from 'react';

import { FileInput } from 'design/components';

import type { FileProps } from 'design/components/input/docs/controls';

const Preview: React.FC<FileProps> = (props) => {
  return <FileInput accept='image/*' aria-label='Photo' {...props} />;
};

export { Preview };
