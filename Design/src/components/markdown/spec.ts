import type { Level } from 'design/components/spec';

export type Props = {
  /**
   * Inline code takes a look in braces straight after it:
   * `` `IDLE`{confirm} ``.
   */
  children: string;
};

export type Look = Level | 'secondary';
