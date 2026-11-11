import React from 'react';

// Vectors
import type { monochrome, polychrome } from './vectors';

export type Name =
  | (typeof monochrome.Names)[keyof typeof monochrome.Names]
  | (typeof polychrome.Names)[keyof typeof polychrome.Names];

/** Only what both an `img` and the SVG wrapper take. It's `1em`, so a `kicl-font-size-*` class sizes it. */
export type Props = Pick<
  React.HTMLAttributes<HTMLElement>,
  'className' | 'id' | 'title'
> &
  Pick<React.ImgHTMLAttributes<HTMLImageElement>, 'alt'> & {
    src?: Name;
  };
