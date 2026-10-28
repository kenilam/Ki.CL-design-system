import type { HTMLAttributes, ReactElement } from 'react';

type Styling = Pick<HTMLAttributes<HTMLElement>, 'className' | 'style'>;

export type Props = Pick<Styling, 'className'> & {
  /** The one element to frame. It keeps its own tag and props. */
  children: ReactElement<Styling>;
  /** Ease in from the window's full height to the frame. On unless turned off. */
  animate?: boolean;
  /**
   * Clip what bleeds past the frame. Turn it off when the children crop
   * themselves and something, such as text, should pass the edge.
   */
  clip?: boolean;
  /** Milliseconds to wait before easing in. */
  delay?: number;
  /** A minimum height instead of a fixed one, for content taller than the window. */
  grow?: boolean;
};
