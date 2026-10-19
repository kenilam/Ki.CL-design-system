import type { Level } from 'design/components/spec';

export type Props = {
  /**
   * Markdown: one line of bold, emphasis, code and links, or a document with
   * headings, paragraphs, lists, quotes and code blocks. Code takes a look in
   * braces straight after it: `` `IDLE`{confirm} ``.
   */
  children: string;
};

/** The looks inline code has: dimmed, or one of the functional colours. */
export type Look = Level | 'secondary';
