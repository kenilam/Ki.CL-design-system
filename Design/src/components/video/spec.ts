import React from 'react';

export type Props = React.ComponentPropsWithoutRef<'video'> & {
  /** URL of an English WebVTT file. */
  captions?: string;
};
