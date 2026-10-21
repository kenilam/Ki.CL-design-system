import type React from 'react';

/** A page the menu can link to. */
export type Page = {
  name: string;
  to: string;
};

export type Crumb = {
  /** What it reads. */
  name: string;
  /**
   * Where it leads. A crumb without one, such as a category with no page of
   * its own, is text, and it is left out of the menu when it folds.
   */
  to?: string;
  /**
   * Every page at this crumb's level, in order, this one included. When the
   * crumb folds, the menu lists them all, with the trail going on under it.
   */
  siblings?: readonly Page[];
};

export type Props = Omit<React.ComponentPropsWithoutRef<'nav'>, 'children'> & {
  /** The trail from the top, up to the page before this one. */
  crumbs: readonly Crumb[];
  /** This page's name, the last crumb. */
  current: string;
};
