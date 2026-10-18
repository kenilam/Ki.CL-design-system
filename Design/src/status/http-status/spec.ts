import type { StatusProps } from 'design/components';

/** What a page says beside its code: a message, and a title over it. */
export type Props = Required<Pick<StatusProps, 'message'>> &
  Pick<StatusProps, 'title'>;
