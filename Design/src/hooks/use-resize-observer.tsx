import { useEffect, useMemo, useState } from 'react';

const isSameRect = (a: DOMRect | undefined, b: DOMRect) =>
  Object.entries(b.toJSON()).every(([key, value]) => a?.[key] === value);

function useResizeObserver<Node extends HTMLElement>() {
  const [element, setElement] = useState<Node | null>(null);
  const [rect, setRect] = useState<DOMRect>();

  /*
   * A ref whose `current` is kept in state, so the hook hears the element
   * arrive. A plain ref says nothing when it is filled: called in a provider,
   * with the element mounted later by something under it, the hook would
   * never find out there was anything to observe.
   */
  const node = useMemo(() => {
    let current: Node | null = null;

    return {
      get current() {
        return current;
      },
      set current(value) {
        current = value;
        setElement(value);
      },
    };
  }, []);

  useEffect(() => {
    if (!element) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      const next = element.getBoundingClientRect();

      setRect((previous) => (isSameRect(previous, next) ? previous : next));
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [element]);

  return { node, rect };
}

export { useResizeObserver };
