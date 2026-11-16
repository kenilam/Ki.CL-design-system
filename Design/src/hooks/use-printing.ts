import { useSyncExternalStore } from 'react';
import { flushSync } from 'react-dom';

const readers = new Set<() => void>();

let printing = false;

// The page is laid out for paper as soon as the event's handlers return, so
// every reader renders inside the handler, in one pass.
const tell = (next: boolean) => {
  return () => {
    printing = next;

    flushSync(() => {
      readers.forEach((reader) => {
        reader();
      });
    });
  };
};

const start = tell(true);
const end = tell(false);

const subscribe = (reader: () => void) => {
  if (!readers.size) {
    window.addEventListener('beforeprint', start);
    window.addEventListener('afterprint', end);
  }

  readers.add(reader);

  return () => {
    readers.delete(reader);

    if (!readers.size) {
      window.removeEventListener('beforeprint', start);
      window.removeEventListener('afterprint', end);
    }
  };
};

const read = () => {
  return printing;
};

const never = () => {
  return false;
};

const usePrinting = () => {
  return useSyncExternalStore(subscribe, read, never);
};

export { usePrinting };
