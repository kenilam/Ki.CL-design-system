import React from 'react';

/**
 * `alt` is required: pass `''` for a decorative picture. Round the corners
 * with a `kicl-border-radius-*` class: the box clips the picture to them.
 *
 * `onResize` is deliberately absent: `resize` does not fire on an `<img>`, and
 * React 19.2 dropped it from `ImgHTMLAttributes` accordingly.
 */
export type Props = Omit<
  React.ComponentPropsWithoutRef<'span'>,
  'onError' | 'onLoad'
> &
  Pick<
    React.ComponentPropsWithoutRef<'img'>,
    'loading' | 'onError' | 'onLoad'
  > &
  Required<Pick<React.ComponentPropsWithoutRef<'img'>, 'alt'>> & {
    data?: string;
    placeholder?: React.ReactNode;
  };
