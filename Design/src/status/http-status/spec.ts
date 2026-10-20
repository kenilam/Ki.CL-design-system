import type { StatusProps } from 'design/components';

export type Props = Required<Pick<StatusProps, 'message'>> &
  Pick<StatusProps, 'title'>;
