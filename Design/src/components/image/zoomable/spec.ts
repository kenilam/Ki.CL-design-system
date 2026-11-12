import type * as Image from 'design/components/image/spec';

export type Props = Pick<
  Image.Props,
  | 'alt'
  | 'className'
  | 'data'
  | 'loading'
  | 'onError'
  | 'onLoad'
  | 'placeholder'
>;
