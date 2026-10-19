import React from 'react';

import { Image } from 'design/components';

import type { Props } from 'design/components/image/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Image
    alt='The Ki.CL banner'
    className='kicl-inline-size-columns-4'
    data='/assets/static/banner.light.webp'
    {...props}
  />
);

export { Preview };
