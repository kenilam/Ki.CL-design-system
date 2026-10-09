import React from 'react';

export type GlobalHeaderProps = React.PropsWithChildren<
  /** For a page that has no header at all, such as the home page. It takes no room. */
  Pick<React.ComponentProps<'header'>, 'hidden'>
>;
