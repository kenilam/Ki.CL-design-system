// Spec
import type * as Spec from 'design/components/hyper-link/spec';

// Components
import { getButtonContent, hasButtonText } from 'design/components';

// Hooks
import { useURLStatus } from 'design/components/hyper-link/hooks';

export type Props = Pick<
  Spec.Props,
  | 'after'
  | 'before'
  | 'busy'
  | 'iconOnlyUpTo'
  | 'lookLikeButton'
  | 'target'
  | 'to'
> & {
  contents: Spec.Props['children'];
};

const useValue = ({
  after,
  before,
  busy,
  contents,
  iconOnlyUpTo,
  lookLikeButton,
  target,
  to,
}: Props) => {
  const status = useURLStatus(to);

  return {
    ...getButtonContent({
      after,
      before,
      busy,
      children: contents,
      iconOnlyUpTo,
    }),
    busy,
    hasLine: !lookLikeButton && !!(after || before),
    iconOnlyUpTo,
    isHash: status.isHash,
    isIcon: !hasButtonText(after, before, contents),
    lookLikeButton,
    target: status.isExternal ? '_blank' : target,
  };
};

export { useValue };
