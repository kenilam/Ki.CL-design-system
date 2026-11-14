import type { HeadingProps } from 'design/components';

import type { Options } from 'design/components/animated/spec';

export type Props = HeadingProps extends infer Each
  ? Each extends unknown
    ? Omit<Each, 'children'> & Options
    : never
  : never;
