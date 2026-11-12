import React, { createContext, useContext } from 'react';

// Spec
import type * as Spec from 'design/components/hyper-link/spec';

// Components
import { getButtonContent } from 'design/components';

// Hooks
import { useURLStatus } from 'design/components/hyper-link/hooks';

type Props = React.PropsWithChildren<
  Pick<
    Spec.Props,
    'after' | 'before' | 'busy' | 'lookLikeButton' | 'target' | 'to'
  > & {
    contents: Spec.Props['children'];
  }
>;

type Value = Pick<Spec.Props, 'busy' | 'lookLikeButton' | 'target'> &
  ReturnType<typeof getButtonContent> & {
    hasLine: boolean;
    isHash: boolean;
  };

const HyperLinkContext = createContext<Value | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  after,
  before,
  busy,
  children,
  contents,
  lookLikeButton,
  target,
  to,
}) => {
  const status = useURLStatus(to);
  const content = getButtonContent({
    after,
    before,
    busy,
    children: contents,
  });

  return (
    <HyperLinkContext.Provider
      value={{
        ...content,
        busy,
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
