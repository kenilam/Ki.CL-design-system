import { useEffect, useMemo, useState } from 'react';

const isSameRect = (a: DOMRect | undefined, b: DOMRect) => {
  return Object.entries(b.toJSON()).every(([key, value]) => {
    return a?.[key] === value;
  });
};

function useResizeObserver<Node extends HTMLElement>() {
  const [element, setElement] = useState<Node | null>(null);
  const [rect, setRect] = useState<DOMRect>();

  /*
   * `current` is mirrored into state because a plain ref doesn't rerender when
   * filled, so a provider would miss an element mounted later below it.
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

      setRect((previous) => {
        return isSameRect(previous, next) ? previous : next;
      });
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [element]);

  return { node, rect };
}

export { useResizeObserver };
