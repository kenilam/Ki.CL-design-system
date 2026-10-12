import type { TextAccent } from '../text';

export type Props = {
  /**
   * One line or paragraph of inline Markdown: bold, emphasis, code, links.
   * Code takes a look in braces straight after it: `` `IDLE`{confirm} ``.
   */
  children: string;
};

/** The looks inline code has: dimmed, or one of the functional colours. */
export type Look = TextAccent | 'secondary';
