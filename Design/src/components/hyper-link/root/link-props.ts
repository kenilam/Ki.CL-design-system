// Spec
import type * as Spec from 'design/components/hyper-link/spec';

export const getLinkProps = ({
  caseSensitive: _caseSensitive,
  style,
  ...rest
}: Omit<Spec.Props, 'children' | 'to'>) => {
  return {
    ...rest,
    style: typeof style === 'function' ? undefined : style,
  };
};
