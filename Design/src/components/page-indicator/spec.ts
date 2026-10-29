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
};
