import type React from 'react';

export type Page = {
  name: string;
  to: string;
};

export type Crumb = {
  name: string;
  to?: string;
  /** Every page at this crumb's level, in order, including this one. */
  siblings?: readonly Page[];
};

export type Props = Omit<React.ComponentPropsWithoutRef<'nav'>, 'children'> & {
  crumbs: readonly Crumb[];
  current: string;
};
