import React, { createContext, useContext } from 'react';

// Spec
import type * as Spec from 'design/components/page-indicator/spec';

type Value = Pick<Spec.Props, 'current' | 'pages'>;

type Props = React.PropsWithChildren<Value>;

const PageIndicatorContext = createContext<Value | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  children,
  current,
  pages,
}) => {
  return (
    <PageIndicatorContext.Provider value={{ current, pages }}>
      {children}
    </PageIndicatorContext.Provider>
  );
};

const usePageIndicator = () => {
  const value = useContext(PageIndicatorContext);

  if (!value) {
    throw new Error('usePageIndicator needs a PageIndicator around it.');
  }

  return value;
};

export { Provider, usePageIndicator };
