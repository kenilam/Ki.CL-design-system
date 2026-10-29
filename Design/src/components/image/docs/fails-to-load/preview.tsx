import React from 'react';

import { Image } from 'design/components';

import type { Props } from 'design/components/image/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Image
      alt='A picture that is missing'
      className='kicl-aspect-ratio-video kicl-inline-size-columns-3'
      data='/assets/static/missing.webp'
      {...props}
    />
  );
};

export { Preview };
