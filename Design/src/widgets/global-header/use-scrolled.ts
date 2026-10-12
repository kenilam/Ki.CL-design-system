import { useEffect } from 'react';

/**
 * Says which way the page last scrolled, on `:root`, for a browser without
 * scroll-state queries: Safari, and so every browser on iOS. Where the query
 * works the stylesheet reads it and this does nothing.
 */
function useScrolled() {
  useEffect(() => {
    if (CSS.supports('container-type', 'scroll-state')) {
      return;
    }

    const root = document.documentElement;

    let last = window.scrollY;

    const onScroll = () => {
      /*
       * Kept inside the page. iOS scrolls past both ends and springs back,
       * and the spring would read as a scroll the other way: the header
       * would hide at the top of the page and show at the bottom.
       */
      const next = Math.min(
        Math.max(window.scrollY, 0),
        root.scrollHeight - window.innerHeight
      );

      if (next === last) {
        return;
      }

      root.dataset.kiclScrolled = next > last ? 'bottom' : 'top';

      last = next;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);

      delete root.dataset.kiclScrolled;
    };
  }, []);
}

export { useScrolled };
