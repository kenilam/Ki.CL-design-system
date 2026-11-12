import React, { createContext, useContext } from 'react';

// Spec
import type * as Spec from 'design/components/page-indicator/spec';

type Props = React.PropsWithChildren<Pick<Spec.Props, 'pages'>>;

const PageIndicatorContext = createContext<Spec.Props['pages'] | null>(null);

const Provider: React.FunctionComponent<Props> = ({ children, pages }) => {
  return (
    <PageIndicatorContext.Provider value={pages}>
      {children}
    </PageIndicatorContext.Provider>
  );
};

const usePageIndicator = () => {
  const pages = useContext(PageIndicatorContext);

  if (!pages) {
    throw new Error('usePageIndicator needs a PageIndicator around it.');
  }

  return pages;
};

export { Provider, usePageIndicator };
