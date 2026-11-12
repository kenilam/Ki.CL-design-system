import type React from 'react';
import { useCallback, useEffect, useRef } from 'react';

// Helpers
import { mergeRefs } from 'design/helper';

/**
 * The open list is in the top layer, so it would float over the sticky header
 * the select scrolls under. A page scroll closes it, as it does a native
 * select's. Script can't close a base-select list, but dropping its
 * appearance for one style recalculation does, with no paint in between.
 */
const useCloseOnScroll = (ref?: React.Ref<HTMLSelectElement>) => {
  const select = useRef<HTMLSelectElement>(null);
  const attach = useCallback(
    (element: HTMLSelectElement | null) => {
      mergeRefs(ref, select)(element);
    },
    [ref]
  );

  useEffect(() => {
    const close = () => {
      const node = select.current;

      if (!node?.matches(':open')) {
        return;
      }

      node.style.setProperty('appearance', 'auto', 'important');
      node.getBoundingClientRect();
      node.style.removeProperty('appearance');
    };

    window.addEventListener('scroll', close, { passive: true });

    return () => {
      window.removeEventListener('scroll', close);
    };
  }, []);

  return attach;
};

export { useCloseOnScroll };
