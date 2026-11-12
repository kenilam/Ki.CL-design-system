import type { RangeInputProps } from 'design/components';

export type Props = Pick<RangeInputProps, 'className' | 'disabled'> & {
  /** The length of what's playing, in seconds. */
  duration: number;
  /** How far it has played, in seconds. */
  elapsed: number;
  /** Called with the second the reader moved to. */
  onSeek?: (seconds: number) => void;
};
