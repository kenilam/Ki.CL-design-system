import type { AnimationProps } from 'design/components';

export const delayAfter = (
  ms: number,
  duration: AnimationProps['duration']
) => {
  return `calc(${ms}ms + var(--kicl-transition-duration-${duration}))`;
};
