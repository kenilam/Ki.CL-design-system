import { useEffect, useRef } from 'react';

// Constants
import { CLASS_NAME } from 'design/components/sheet/constants';

// Puts a stuck part's height on the sheet, so its content can stick below the header and scroll clear of both.
const useBlockSize = (part: 'footer' | 'header') => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    const sheet = element?.closest<HTMLElement>(`.${CLASS_NAME}`);

    if (!element || !sheet) {
      return;
    }

    const property = `--${CLASS_NAME}--${part}-block-size`;
    const observer = new ResizeObserver(([entry]) => {
      const size = entry?.borderBoxSize[0]?.blockSize ?? 0;

      sheet.style.setProperty(property, `${size}px`);
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
      sheet.style.removeProperty(property);
    };
  }, [part]);

  return ref;
};

export { useBlockSize };
