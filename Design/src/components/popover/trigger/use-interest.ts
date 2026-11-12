import { useEffect } from 'react';

// Context
import {
  usePopoverInterest,
  usePopoverParts,
} from 'design/components/popover/context';

// The defaults of `interest-delay-start` and `interest-delay-end`.
const DELAY = { end: 250, start: 500 };

/** Safari has no `interestfor`, so hover and keyboard focus show the hint here. */
const useInterest = (trigger: HTMLElement | null) => {
  const { hint } = usePopoverParts();
  const { setInterested } = usePopoverInterest();

  useEffect(() => {
    if (
      !trigger ||
      !hint ||
      'interestForElement' in HTMLButtonElement.prototype
    ) {
      return;
    }

    let timer: ReturnType<typeof setTimeout> | undefined;

    const later = (interested: boolean, delay: number) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setInterested(interested);
      }, delay);
    };

    const enter = (event: PointerEvent) => {
      if (event.pointerType !== 'touch') {
        later(true, DELAY.start);
      }
    };

    const focus = () => {
      if (trigger.matches(':focus-visible')) {
        later(true, DELAY.start);
      }
    };

    const leave = () => {
      later(false, DELAY.end);
    };

    const dismiss = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        later(false, 0);
      }
    };

    trigger.addEventListener('pointerenter', enter);
    trigger.addEventListener('pointerleave', leave);
    trigger.addEventListener('focus', focus);
    trigger.addEventListener('blur', leave);
    trigger.addEventListener('keydown', dismiss);

    return () => {
      clearTimeout(timer);
      trigger.removeEventListener('pointerenter', enter);
      trigger.removeEventListener('pointerleave', leave);
      trigger.removeEventListener('focus', focus);
      trigger.removeEventListener('blur', leave);
      trigger.removeEventListener('keydown', dismiss);
    };
  }, [hint, setInterested, trigger]);
};

export { useInterest };
