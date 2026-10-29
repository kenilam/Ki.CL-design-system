import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// Helpers
import { mergeRefs } from 'design/helper';

// Hooks
import { useOverlayContents } from 'design/hooks';

// Spec
import type { PopoverContentProps } from 'design/components/popover/spec';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as POPOVER } from 'design/components/popover/constants';

// Class names
import { getContentClassNames } from './class-names';

// Context
import { usePopover } from 'design/components/popover/context';

const PopoverContent = React.forwardRef<HTMLElement, PopoverContentProps>(
  (
    {
      children,
      className,
      forceMount,
      offset = 'narrow',
      placement = 'block-end',
      style,
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    const popover = usePopover();

    const isLabelled = Boolean(rest['aria-label'] || rest['aria-labelledby']);
    const nodeRef = useRef<HTMLElement | null>(null);
    const { setContent } = popover;
    const shown = useOverlayContents(nodeRef, popover.open);

    useEffect(() => {
      setContent(true);

      return () => {
        setContent(false);
      };
    }, [setContent]);

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

      return () => {
        node.removeEventListener('toggle', onToggle);
      };
    }, [popover]);

    // Applies a change to `open` that no click caused, such as a date chosen
    // inside the panel or `defaultOpen` on mount.
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

    useEffect(() => {
      const node = nodeRef.current;

      if (!node || !popover.open) {
        return undefined;
      }

      const trigger = document.getElementById(`${popover.id}__trigger`);

      const close = () => {
        const focused = node.contains(document.activeElement);

        node.hidePopover();

        if (focused) {
          document
            .getElementById(`${popover.id}__trigger`)
            ?.focus({ preventScroll: true });
        }
      };

      const onScroll = (event: Event) => {
        if (event.target instanceof Node && node.contains(event.target)) {
          return;
        }

        const anchor = trigger?.getBoundingClientRect();
        const panel = node.getBoundingClientRect();

        if (
          anchor &&
          (panel.right <= anchor.left || panel.left >= anchor.right)
        ) {
          return;
        }

        const focused = node.contains(document.activeElement);

        if (!focused && document.activeElement?.matches('input, textarea')) {
          return;
        }

        close();
      };

      const onResize = () => {
        if (document.activeElement?.matches('input, textarea')) {
          return;
        }

        close();
      };

      document.addEventListener('scroll', onScroll, {
        capture: true,
        passive: true,
      });
      window.addEventListener('resize', onResize);

      return () => {
        document.removeEventListener('scroll', onScroll, { capture: true });
        window.removeEventListener('resize', onResize);
      };
    }, [popover.id, popover.open]);

    const panel = (
      <section
        ref={mergeRefs(nodeRef, ref)}
        id={popover.id}
        popover='auto'
        role='dialog'
        aria-labelledby={isLabelled ? undefined : `${popover.id}__trigger`}
        className={getContentClassNames({
          className,
          offset,
          placement,
          variant,
        })}
        style={
          {
            [`--${POPOVER}--anchor`]: popover.anchor,
            ...style,
          } as React.CSSProperties
        }
        {...rest}
      >
        {shown || forceMount ? children : null}
      </section>
    );

    return popover.inline ? createPortal(panel, document.body) : panel;
  }
);

PopoverContent.displayName = 'PopoverContent';

export { PopoverContent };
