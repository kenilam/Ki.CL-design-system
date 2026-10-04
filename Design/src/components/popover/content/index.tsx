import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// Spec
import type { PopoverContentProps } from '../spec';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as POPOVER } from '../constants';

// Class names
import { getContentClassNames } from './class-names';

// Context
import { usePopover } from '../context';

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  (
    {
      children,
      className,
      offset = 'narrow',
      placement = 'block-end',
      style,
      variant = 'default',
      ...rest
    },
    ref
  ) => {
    const popover = usePopover();

    const isLabelled = Boolean(rest['aria-label'] || rest['aria-labelledby']);
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const { setContent } = popover;

    // Lets the trigger know there is a panel to open.
    useEffect(() => {
      setContent(true);

      return () => setContent(false);
    }, [setContent]);

    /* The browser is the source of truth; this reports what it decided. */
    useEffect(() => {
      const node = nodeRef.current;

      if (!node) {
        return undefined;
      }

      const onToggle = (event: Event) => {
        const next = (event as ToggleEvent).newState === 'open';

        if (next !== popover.open) {
          popover.setOpen(next);
        }
      };

      node.addEventListener('toggle', onToggle);

      return () => node.removeEventListener('toggle', onToggle);
    }, [popover]);

    /*
     * And this pushes a caller's decision back the other way, for the openings
     * and closings no click caused - a date chosen inside the panel, or a
     * `defaultOpen` panel that has to be shown once on mount.
     */
    useEffect(() => {
      const node = nodeRef.current;

      if (!node) {
        return;
      }

      const shown = node.matches(':popover-open');

      if (popover.open && !shown) {
        node.showPopover();
      }

      if (!popover.open && shown) {
        node.hidePopover();
      }
    }, [popover.open]);

    const panel = (
      <div
        ref={(node) => {
          nodeRef.current = node;

          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        id={popover.id}
        popover='auto'
        role='dialog'
        /* Named by its trigger unless the caller gives it a name. */
        aria-labelledby={isLabelled ? undefined : `${popover.id}__trigger`}
        data-slot='popover-content'
        className={getContentClassNames({
          className,
          offset,
          placement,
          variant,
        })}
        /*
         * Its own copy of the anchor name: an inline popover's panel is
         * rendered outside the wrapper, so it can't inherit it.
         */
        style={
          {
            [`--${POPOVER}--anchor`]: popover.anchor,
            ...style,
          } as React.CSSProperties
        }
        {...rest}
      >
        {children}
      </div>
    );

    /*
     * A panel inside running text would be a block inside a phrase, which is
     * invalid markup. It shows in the top layer either way, so where it sits
     * in the document only matters for validity.
     */
    return popover.inline ? createPortal(panel, document.body) : panel;
  }
);

PopoverContent.displayName = 'PopoverContent';

export { PopoverContent };
