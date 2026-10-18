import React from 'react';
import * as Ri from 'react-icons/ri';

import { Image } from 'design/components';

import type { Props } from 'design/components/image/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Image
    alt='A picture that is missing'
    className='kicl-aspect-ratio-video kicl-inline-size-columns-3'
    data='/assets/static/missing.webp'
    placeholder={<Ri.RiImageLine aria-hidden />}
    {...props}
  />
);

export { Preview };
