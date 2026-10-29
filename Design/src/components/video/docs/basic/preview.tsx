import React from 'react';

import { Video } from 'design/components';

import type { Props } from 'design/components/video/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Video
      aria-label='A bee on a flower'
      autoPlay
      className='kicl-inline-size-columns-6'
      loop
      muted
      src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
      {...props}
    />
  );
};

export { Preview };
