import React from 'react';
import * as Ri from 'react-icons/ri';

import { Image } from 'design/components';

import type { Props } from 'design/components/image/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Image
      alt='A picture that is missing'
      className='kicl-aspect-ratio-video kicl-inline-size-columns-3'
      data='/assets/static/missing.webp'
      placeholder={
        <Ri.RiImageLine
          aria-hidden
          className='kicl-color-grey kicl-font-size-large'
        />
      }
      {...props}
    />
  );
};

export { Preview };
