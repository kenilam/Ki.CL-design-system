import { useLayoutEffect } from 'react';

// Context
import { useBreadcrumb } from 'design/components/breadcrumb/context';

// CSS can't tell when text is cut short, so this folds one more crumb per
// pass until nothing overflows.
const useFold = () => {
  const { crumbs, current, fitted, isFull, node, setFit, width } =
    useBreadcrumb();

  useLayoutEffect(() => {
    const element = node.current;
    const page = element?.querySelector('[aria-current="page"]');

    if (!element || !page || !width) {
      return;
    }

    const isCut =
      page.scrollWidth > page.clientWidth ||
      element.scrollWidth > element.clientWidth;

    let folded = fitted;

    if (isCut && !isFull) {
      folded = fitted + 1;
    }

    setFit({ folded, width });
  }, [crumbs, current, fitted, isFull, node, setFit, width]);
};

export { useFold };
