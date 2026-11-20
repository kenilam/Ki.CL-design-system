import { useEffect } from 'react';

// Context
import {
  usePopoverIds,
  usePopoverInterest,
  usePopoverParts,
} from 'design/components/popover/context';

// The defaults of `interest-delay-start` and `interest-delay-end`.
const DELAY = { end: 250, start: 500 };

/**
 * Shows the hint on hover and keyboard focus, and keeps it while the pointer
 * is over the hint. A trigger that only has a hint keeps it while it's focused
 * or after it's pressed, until the press or focus moves elsewhere, Escape, or a
 * scroll that moves the trigger. A trigger that opens a panel doesn't keep it,
 * so the hint doesn't return when the panel closes.
 */
const useInterest = (trigger: HTMLElement | null) => {
  const { id } = usePopoverIds();
  const { content, hint } = usePopoverParts();
  const { setInterested } = usePopoverInterest();

  useEffect(() => {
    const tip = document.getElementById(`${id}__hint`);

    if (!trigger || !hint || !tip) {
      return;
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    let pinned = false;

    const later = (interested: boolean, delay: number) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setInterested(interested);
      }, delay);
    };

    const held = () => pinned || trigger.matches(':focus-within');

    const enter = (event: PointerEvent) => {
      if (event.pointerType !== 'touch') {
        later(true, DELAY.start);
      }
    };

    const leave = () => {
      if (!held()) {
        later(false, DELAY.end);
      }
    };

    const stay = () => {
      clearTimeout(timer);
    };

    // Keyboard focus only: a script that moves focus, as a sheet does when it
    // opens, isn't interest.
    const focus = () => {
      if (trigger.matches(':focus-visible')) {
        later(true, content ? DELAY.start : 0);
      }
    };

    const blur = () => {
      pinned = false;
      later(false, DELAY.end);
    };

    const press = () => {
      pinned = !content;
      later(!content, 0);
    };

    const outside = (event: PointerEvent) => {
      const target = event.target as Node;

      if (trigger.contains(target) || tip.contains(target)) {
        return;
      }

      pinned = false;
      later(false, 0);
    };

    // Scrolling the page, or a part the trigger is in, moves the trigger away
    // from its hint.
    const scroll = (event: Event) => {
      if (!(event.target as Node | null)?.contains(trigger)) {
        return;
      }

      pinned = false;
      later(false, 0);
    };

    // Escape closes an open hint first. Marked as handled, so the sheet or
    // dialog behind it stays open.
    const escape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !tip.matches(':popover-open')) {
        return;
      }

      event.preventDefault();
      pinned = false;
      later(false, 0);
    };

    trigger.addEventListener('pointerenter', enter);
    trigger.addEventListener('pointerleave', leave);
    trigger.addEventListener('focusin', focus);
    trigger.addEventListener('focusout', blur);
    trigger.addEventListener('pointerdown', press);
    tip.addEventListener('pointerenter', stay);
    tip.addEventListener('pointerleave', leave);
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape, true);
    document.addEventListener('scroll', scroll, {
      capture: true,
      passive: true,
    });

    return () => {
      clearTimeout(timer);
      trigger.removeEventListener('pointerenter', enter);
      trigger.removeEventListener('pointerleave', leave);
      trigger.removeEventListener('focusin', focus);
      trigger.removeEventListener('focusout', blur);
      trigger.removeEventListener('pointerdown', press);
      tip.removeEventListener('pointerenter', stay);
      tip.removeEventListener('pointerleave', leave);
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape, true);
      document.removeEventListener('scroll', scroll, { capture: true });
    };
  }, [content, hint, id, setInterested, trigger]);
};

export { useInterest };
