import React, { createContext, useContext } from 'react';

// Spec
import type * as Spec from 'design/components/hyper-link/spec';

// Hooks
import { useURLStatus } from 'design/components/hyper-link/hooks';

type Props = React.PropsWithChildren<
  Pick<Spec.Props, 'after' | 'before' | 'lookLikeButton' | 'target' | 'to'> & {
    contents: Spec.Props['children'];
  }
>;

type Value = Pick<
  Spec.Props,
  'after' | 'before' | 'lookLikeButton' | 'target'
> & {
  children: Spec.Props['children'];
  hasLine: boolean;
  isHash: boolean;
};

const HyperLinkContext = createContext<Value | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  after,
  before,
  children,
  contents,
  lookLikeButton,
  target,
  to,
}) => {
  const status = useURLStatus(to);

  return (
    <HyperLinkContext.Provider
      value={{
        after,
        before,
        children: contents,
        hasLine: !lookLikeButton && !!(after || before),
        isHash: status.isHash,
        lookLikeButton,
        target: status.isExternal ? '_blank' : target,
      }}
    >
      {children}
    </HyperLinkContext.Provider>
  );
};

const useHyperLink = () => {
  const hyperLink = useContext(HyperLinkContext);

  if (!hyperLink) {
    throw new Error('useHyperLink needs a HyperLink around it.');
  }

  return hyperLink;
};

export { Provider, useHyperLink };
