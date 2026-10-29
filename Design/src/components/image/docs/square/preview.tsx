import React from 'react';

import { Image } from 'design/components';

import type { Props } from 'design/components/image/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Image
      alt='The Ki.CL icon'
      className='kicl-aspect-ratio-square kicl-inline-size-columns-2'
      data='/assets/static/icon-512.png'
      {...props}
    />
  );
};

export { Preview };
