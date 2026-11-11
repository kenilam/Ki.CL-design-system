import React, { useEffect, useRef } from 'react';

/** Read on each call because the CSS token may not be loaded when this module is. */
const fillsScreen = () => {
  const narrow = getComputedStyle(document.documentElement)
    .getPropertyValue('--kicl-breakpoint-narrow')
    .trim();

  return Boolean(narrow) && matchMedia(`(max-width: ${narrow})`).matches;
};

const useModal = (
  node: React.RefObject<HTMLElement | null>,
  modal: boolean
) => {
  const modally = useRef(modal);

  useEffect(() => {
    modally.current = modal;
  }, [modal]);

  useEffect(() => {
    const element = node.current as HTMLDialogElement | null;

    if (!element) {
      return;
    }

    // `showModal()` fires `beforetoggle` too, and this lets that one through.
    let modaling = false;

    const beforeToggle = (event: Event) => {
      const { newState } = event as ToggleEvent;

      if (
        modaling ||
        newState !== 'open' ||
        element.open ||
        !(modally.current || fillsScreen())
      ) {
        return;
      }

      event.preventDefault();
      modaling = true;
      element.showModal();
      modaling = false;
    };

    element.addEventListener('beforetoggle', beforeToggle);

    return () => {
      element.removeEventListener('beforetoggle', beforeToggle);
    };
  }, [node]);

  useEffect(() => {
    const element = node.current as HTMLDialogElement | null;

    if (!element) {
      return;
    }

    if (modal && element.matches(':popover-open')) {
      element.hidePopover();
      element.showPopover();
    }

    if (!modal && element.open && !fillsScreen()) {
      element.close();
      element.showPopover();
    }
  }, [modal, node]);
};

export { useModal };
