import type { HTMLAttributes, ReactElement } from 'react';

type Styling = Pick<HTMLAttributes<HTMLElement>, 'className' | 'style'>;

export type Props = Pick<Styling, 'className'> & {
  children: ReactElement<Styling>;
  /** On by default. */
  animate?: boolean;
  /**
   * On by default. Turn it off when something, such as text, should pass the
   * edge.
   */
  clip?: boolean;
  /** In milliseconds. */
  delay?: number;
  /** A minimum height instead of a fixed one, for content taller than the window. */
  grow?: boolean;
};
