import { useState } from 'react';

// Hooks
import { useResizeObserver } from 'design/hooks';

// Spec
import type * as Spec from 'design/components/breadcrumb/spec';

const useFit = ({
  crumbs,
  current,
}: Pick<Spec.Props, 'crumbs' | 'current'>) => {
  const { node, rect } = useResizeObserver<HTMLElement>();

  const [fit, setFit] = useState({ folded: 0, width: 0 });
  const width = Math.round(rect?.width ?? 0);
  const fitted = fit.width === width ? fit.folded : 0;

  const menu = crumbs
    .slice(0, fitted)
    .filter((crumb): crumb is Spec.Crumb & Spec.Page => {
      return Boolean(crumb.to);
    });

  return {
    crumbs,
    current,
    fitted,
    isFull: fitted === crumbs.length,
    menu,
    node,
    setFit,
    width,
  };
};

export { useFit };
