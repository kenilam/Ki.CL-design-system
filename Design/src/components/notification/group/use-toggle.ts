import React, { useEffect, useRef } from 'react';

// Spec
import type { NotificationGroupProps } from 'design/components/notification/spec';

type Options = Pick<
  NotificationGroupProps,
  'closable' | 'defaultOpen' | 'onOpenChange'
>;

const useToggle = (
  node: React.RefObject<HTMLElement | null>,
  { closable, defaultOpen, onOpenChange }: Options
) => {
  const options = useRef({ closable, defaultOpen, onOpenChange });

  useEffect(() => {
    options.current = { ...options.current, closable, onOpenChange };
  }, [closable, onOpenChange]);

  useEffect(() => {
    const element = node.current;

    if (!element) {
      return;
    }

    const toggle = (event: Event) => {
      options.current.onOpenChange?.(
        (event as ToggleEvent).newState === 'open'
      );
    };

    const keydown = (event: KeyboardEvent) => {
      if (
        event.key === 'Escape' &&
        options.current.closable &&
        element.matches(':popover-open')
      ) {
        element.hidePopover();
      }
    };

    element.addEventListener('toggle', toggle);
    element.addEventListener('keydown', keydown);

    if (options.current.defaultOpen && !element.matches(':popover-open')) {
      element.showPopover();
    }

    return () => {
      element.removeEventListener('toggle', toggle);
      element.removeEventListener('keydown', keydown);
    };
  }, [node]);
};

export { useToggle };
