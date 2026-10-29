import React from 'react';

export type GlobalHeaderProps = React.PropsWithChildren<
  /** Not rendered and takes no room. */
  Pick<React.ComponentProps<'header'>, 'hidden'>
>;
