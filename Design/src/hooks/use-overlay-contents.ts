import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

/**
 * Listens for `command` because not every browser sends a dialog
 * `beforetoggle` yet. The contents go in synchronously so the overlay opens
 * with them, not a frame later.
 */
const useOverlayContents = (
  node: React.RefObject<HTMLElement | null>,
  open = false
) => {
  const [shown, setShown] = useState(open);
  const [previous, setPrevious] = useState(open);

  if (open !== previous) {
    setPrevious(open);

    if (open) {
      setShown(true);
    }
  }

  const showing = useRef(shown);

  useLayoutEffect(() => {
    showing.current = shown;
  }, [shown]);

  useEffect(() => {
    const element = node.current;

    if (!element) {
      return undefined;
    }

    const opening = () => {
      if (!showing.current) {
        showing.current = true;
        flushSync(() => {
          setShown(true);
        });
      }
    };

    const command = (event: Event) => {
      if ((event as Event & { command: string }).command.startsWith('show')) {
        opening();
      }
    };

    const beforeToggle = (event: Event) => {
      if ((event as ToggleEvent).newState === 'open') {
        opening();
      }
    };

    const closed = () => {
      void Promise.allSettled(
        element.getAnimations({ subtree: true }).map((animation) => {
          return animation.finished;
        })
      ).then(() => {
        if (!element.matches(':popover-open, [open]')) {
          setShown(false);
        }
      });
    };

    const toggle = (event: Event) => {
      if ((event as ToggleEvent).newState === 'closed') {
        closed();
      }
    };

    element.addEventListener('command', command);
    element.addEventListener('beforetoggle', beforeToggle);
    element.addEventListener('toggle', toggle);
    element.addEventListener('close', closed);

    return () => {
      element.removeEventListener('command', command);
      element.removeEventListener('beforetoggle', beforeToggle);
      element.removeEventListener('toggle', toggle);
      element.removeEventListener('close', closed);
    };
  }, [node]);

  return shown;
};

export { useOverlayContents };
