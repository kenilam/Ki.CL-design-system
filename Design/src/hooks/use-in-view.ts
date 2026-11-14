import { useEffect, useRef, useState } from 'react';

type Options = Pick<IntersectionObserverInit, 'rootMargin'> & {
  /** Stays true once it has been in view. */
  once?: boolean;
  /** How much of the element has to show, from 0 to 1. */
  threshold?: number;
};

const useInView = <Element extends HTMLElement>({
  once = false,
  rootMargin,
  threshold = 0,
}: Options = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<Element>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const shown =
          entry.isIntersecting && entry.intersectionRatio >= threshold;

        if (shown && once) {
          observer.disconnect();
        }

        setInView(shown);
      },
      { rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, threshold]);

  return { inView, ref };
};

export { useInView };
