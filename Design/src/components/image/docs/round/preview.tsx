import React from 'react';

import classNames from 'classnames';

import { Image } from 'design/components';

import type { Props } from 'design/components/image/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Image
      alt=''
      className={classNames(
        'kicl-aspect-ratio-square',
        'kicl-border-radius-max',
        'kicl-inline-size-columns-1'
      )}
      data='/assets/static/icon-192.png'
      {...props}
    />
  );
};

export { Preview };
