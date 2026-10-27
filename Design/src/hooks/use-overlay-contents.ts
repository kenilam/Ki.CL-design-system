import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

/**
 * Whether an overlay's contents belong in the page: from the moment it starts
 * to open until its closing transition has finished. A closed dialog, sheet or
 * popover keeps only its own element, so a `command` or `popovertarget` button
 * can still find it, and nothing inside it stays mounted or keeps running.
 *
 * `open` is for an overlay its props open; its contents go in on the render
 * that opens it, before the effect that shows it. One a button opens is heard
 * from the element: `command` for a dialog, since not every browser sends a
 * dialog `beforetoggle` yet, and `beforetoggle` for a popover. Both come
 * before it shows, so the contents go in synchronously and it opens with them
 * rather than filling in a frame later.
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
        flushSync(() => setShown(true));
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

    // Out once whatever it animates on the way out, itself or inside, is done.
    const closed = () => {
      void Promise.allSettled(
        element
          .getAnimations({ subtree: true })
          .map((animation) => animation.finished)
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
