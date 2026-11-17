import { CardProps } from 'design/components';

export type Page = {
  /** The page's anchor; its dot links to `#id`. */
  id: string;
  label: string;
};

export type Props = Omit<
  Extract<CardProps, { is: 'nav' }>,
  'footer' | 'gap' | 'header' | 'is' | 'level' | 'size' | 'variant'
> & {
  pages: readonly Page[];
  /**
   * The id of the page being read. Given, its dot is the current one, so the
   * pages can be any height and start anywhere. Without it, each page is
   * taken to be one window tall, from the top of the document.
   */
  current?: string;
  /**
   * Moves with the content instead of staying fixed to the window. Place it in
   * a positioned element that wraps that content: it arrives with it, stays at
   * the middle of the window, and leaves where it ends.
   */
  sticky?: boolean;
};
