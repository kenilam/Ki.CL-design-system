import React, { useEffect, useRef } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Card } from '../card';

// Spec
import type { SheetProps } from './spec';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--sheet';

/**
 * Tablet width and below, where the sheet fills the screen. Read on each call:
 * the breakpoint is a CSS token, and may not be loaded yet when this module is.
 */
const fillsScreen = () => {
  const tablet = getComputedStyle(document.documentElement)
    .getPropertyValue('--kicl-breakpoint-tablet')
    .trim();

  return Boolean(tablet) && matchMedia(`(max-width: ${tablet})`).matches;
};

/**
 * A panel at the side of the page, over what's behind it but not in its way:
 * the page stays usable while it's open, and a click on the page leaves it
 * open. It slides in from the end, and on small screens it fills the screen.
 *
 * It's a dialog: assistive tech announces it as one, and Escape closes it. On
 * small screens, where it covers the page anyway, it opens modal, so focus
 * stays inside it and the page behind is inert and doesn't scroll. Its buttons still work there:
 * a show becomes `showModal()` and a hide closes it. Code that closes it
 * itself should call `close()` when `open` is set, `hidePopover()`
 * otherwise.
 *
 * It's a `Card` in the top layer as a manual popover, so only buttons that
 * point at it with `popovertarget` open and close it. It scrolls as a whole;
 * a `SheetHeader` or `SheetFooter` inside it stays stuck to its top or
 * bottom, with a line of the moving gradient while content runs under it.
 */
const Sheet = React.forwardRef<HTMLElement, SheetProps>(
  (
    {
      children,
      className,
      defaultOpen = false,
      onOpenChange,
      size = 4,
      style,
      ...rest
    },
    ref
  ) => {
    const node = useRef<HTMLElement | null>(null);
    // Only the open state it mounts with counts; after that its buttons lead.
    const opening = useRef(defaultOpen);
    const report = useRef(onOpenChange);

    useEffect(() => {
      report.current = onOpenChange;
    }, [onOpenChange]);

    useEffect(() => {
      const element = node.current as HTMLDialogElement | null;

      if (!element) {
        return;
      }

      // Set while this opens it modal, so its own toggle isn't turned away.
      let modaling = false;

      const beforeToggle = (event: Event) => {
        const { newState } = event as ToggleEvent;

        if (modaling || newState !== 'open' || element.open || !fillsScreen()) {
          return;
        }

        event.preventDefault();
        modaling = true;
        element.showModal();
        modaling = false;
      };

      // Popover and dialog both report through `toggle`.
      const toggle = (event: Event) =>
        report.current?.((event as ToggleEvent).newState === 'open');

      // A modal sheet isn't a popover, so its hide buttons close it here.
      const click = (event: MouseEvent) => {
        if (!element.open) {
          return;
        }

        const button = (event.target as Element | null)?.closest('button');

        if (
          button?.popoverTargetElement === element &&
          button.popoverTargetAction !== 'show'
        ) {
          element.close();
        }
      };

      // A manual popover ignores Escape; a modal dialog handles it itself.
      const keydown = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && element.matches(':popover-open')) {
          element.hidePopover();
        }
      };

      element.addEventListener('beforetoggle', beforeToggle);
      element.addEventListener('toggle', toggle);
      element.addEventListener('keydown', keydown);
      document.addEventListener('click', click);

      if (opening.current && !element.matches(':popover-open')) {
        element.showPopover();
      }

      return () => {
        element.removeEventListener('beforetoggle', beforeToggle);
        element.removeEventListener('toggle', toggle);
        element.removeEventListener('keydown', keydown);
        document.removeEventListener('click', click);
      };
    }, []);

    return (
      <Card
        {...rest}
        // Fixed chrome, so a frame on the page moves its insets inside the frame's edge.
        className={classNames(CLASS_NAME, 'kicl-position-fixed', className)}
        is='dialog'
        popover='manual'
        ref={(element) => {
          node.current = element;

          if (typeof ref === 'function') {
            ref(element);
          } else if (ref) {
            ref.current = element;
          }
        }}
        style={
          {
            [`--${CLASS_NAME}--inline-size`]: `var(--kicl-columns-${size})`,
            ...style,
          } as React.CSSProperties
        }
      >
        {children}
      </Card>
    );
  }
);

Sheet.displayName = 'Sheet';

export type { SheetProps } from './spec';
export { SheetFooter } from './footer';
export { SheetHeader } from './header';
export { Sheet };
