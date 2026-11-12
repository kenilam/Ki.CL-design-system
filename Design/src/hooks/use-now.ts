import { useCallback, useSyncExternalStore } from 'react';

const floor = (time: number, interval: number, offset: number) => {
  return time - ((time - offset) % interval);
};

/**
 * Rounded down to `interval`, counted from `until` when there is one, so
 * every render inside one interval reads the same time and the last change
 * lands on `until`.
 */
const useNow = (interval = 1000, until = Infinity) => {
  const offset = Number.isFinite(until) ? until % interval : 0;

  const getSnapshot = useCallback(() => {
    return floor(Date.now(), interval, offset);
  }, [interval, offset]);

  const subscribe = useCallback(
    (onChange: () => void) => {
      let timer = 0;

      const schedule = () => {
        const now = Date.now();

        if (now >= until) {
          return;
        }

        timer = window.setTimeout(
          () => {
            onChange();
            schedule();
          },
          floor(now, interval, offset) + interval - now
        );
      };

      schedule();

      return () => {
        window.clearTimeout(timer);
      };
    },
    [interval, offset, until]
  );

  return useSyncExternalStore(subscribe, getSnapshot);
};

export { useNow };
