import React, { createContext, useContext } from 'react';

// Spec
import type * as Spec from 'design/components/breadcrumb/spec';

// Partials
import { useFit } from './use-fit';

type Props = React.PropsWithChildren<Pick<Spec.Props, 'crumbs' | 'current'>>;

const BreadcrumbContext = createContext<ReturnType<typeof useFit> | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  children,
  crumbs,
  current,
}) => {
  const fit = useFit({ crumbs, current });

  return (
    <BreadcrumbContext.Provider value={fit}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

const useBreadcrumb = () => {
  const breadcrumb = useContext(BreadcrumbContext);

  if (!breadcrumb) {
    throw new Error('useBreadcrumb needs a Breadcrumb around it.');
  }

  return breadcrumb;
};

export { Provider, useBreadcrumb };
