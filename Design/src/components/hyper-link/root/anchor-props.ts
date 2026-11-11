// Spec
import type * as Spec from 'design/components/hyper-link/spec';

export const getAnchorProps = ({
  caseSensitive: _caseSensitive,
  discover: _discover,
  preventScrollReset: _preventScrollReset,
  relative: _relative,
  reloadDocument: _reloadDocument,
  replace: _replace,
  state: _state,
  style,
  viewTransition: _viewTransition,
  ...rest
}: Omit<Spec.Props, 'children' | 'to'>) => {
  return {
    ...rest,
    style: typeof style === 'function' ? undefined : style,
  };
};
