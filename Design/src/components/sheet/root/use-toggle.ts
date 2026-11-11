import React, { useEffect, useRef } from 'react';

// Spec
import type { SheetProps } from 'design/components/sheet/spec';

const useToggle = (
  node: React.RefObject<HTMLElement | null>,
  onOpenChange: SheetProps['onOpenChange']
) => {
  const report = useRef(onOpenChange);

  useEffect(() => {
    report.current = onOpenChange;
  }, [onOpenChange]);

  useEffect(() => {
    const element = node.current;

    if (!element) {
      return;
    }

    const toggle = (event: Event) => {
      const open = (event as ToggleEvent).newState === 'open';
      const active = document.activeElement as HTMLElement | null;

      report.current?.(open);

      if (
        open ||
        (active && active.tabIndex >= 0 && !element.contains(active))
      ) {
        return;
      }

      const opener = Array.from(
        document.querySelectorAll<HTMLButtonElement>('button[popovertarget]')
      ).find((button) => {
        return (
          button.popoverTargetElement === element && !element.contains(button)
        );
      });

      opener?.focus({ focusVisible: true, preventScroll: true });
    };

    element.addEventListener('toggle', toggle);

    return () => {
      element.removeEventListener('toggle', toggle);
    };
  }, [node]);
};

export { useToggle };
