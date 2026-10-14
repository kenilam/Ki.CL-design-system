import { CardProps } from '..';

export type Page = {
  /** The page's anchor; its dot links to `#id`. */
  id: string;
  /** Read out for the dot, and shown on hover. */
  label: string;
};

export type Props = CardProps & {
  pages: readonly Page[];
};
