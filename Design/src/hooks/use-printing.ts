import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

const usePrinting = () => {
  const [printing, setPrinting] = useState(false);

  useEffect(() => {
    const start = () => {
      flushSync(() => {
        setPrinting(true);
      });
    };

    const end = () => {
      flushSync(() => {
        setPrinting(false);
      });
    };

    window.addEventListener('beforeprint', start);
    window.addEventListener('afterprint', end);

    return () => {
      window.removeEventListener('beforeprint', start);
      window.removeEventListener('afterprint', end);
    };
  }, []);

  return printing;
};

export { usePrinting };
