import React from 'react';

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
