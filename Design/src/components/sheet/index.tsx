import React, { useEffect, useId, useRef } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button } from 'design/components/button';
import { Card } from 'design/components/card';
import { Layout } from 'design/components/layout';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Helpers
import { mergeRefs } from 'design/helper';

// Hooks
import { useOverlayContents } from 'design/hooks';

// Icons
import * as Ri from 'react-icons/ri';

// Partials
import { SheetFooter } from './footer';
import { SheetHeader } from './header';

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
 * open. It slides in from its `side`, and on small screens it fills the screen.
 *
 * It's a dialog: assistive tech announces it as one, and Escape closes it
 * while `closable`. When `modal`, and always on small screens where it covers
 * the page anyway, it opens modal: focus stays inside it, and the page behind
 * is blurred, inert and doesn't scroll. Its buttons still work there:
 * a show becomes `showModal()` and a hide closes it. Code that closes it
 * itself should call `close()` when `open` is set, `hidePopover()`
 * otherwise.
 *
 * It's a `Card` in the top layer as a manual popover, so only buttons that
 * point at it with `popovertarget` open and close it. It scrolls as a whole;
 * a `SheetHeader` or `SheetFooter` inside it stays stuck to its top or
 * bottom, with a line of the moving gradient while content runs under it.
 * `header` and `footer` are what goes in them.
 */
const Sheet = React.forwardRef<HTMLElement, SheetProps>(
  (
    {
      children,
      className,
      closable = true,
      defaultOpen = false,
      footer,
      header,
      modal = false,
      onOpenChange,
      side = 'inline-end',
      size = 4,
      style,
      ...rest
    },
    ref
  ) => {
    const generated = useId();
    const id = rest.id ?? generated;
    const headerId = `${id}--header`;
    const isLabelled = Boolean(rest['aria-label'] || rest['aria-labelledby']);
    const node = useRef<HTMLElement | null>(null);
    const t = useCopy();
    // Closed, it is only its own element, which its buttons can still open.
    const shown = useOverlayContents(node, defaultOpen);
    // Only the open state it mounts with counts; after that its buttons lead.
    const opening = useRef(defaultOpen);
    const report = useRef(onOpenChange);
    const modally = useRef(modal);
    const dismissable = useRef(closable);

    useEffect(() => {
      report.current = onOpenChange;
      modally.current = modal;
      dismissable.current = closable;
    }, [closable, modal, onOpenChange]);

    useEffect(() => {
      const element = node.current as HTMLDialogElement | null;

      if (!element) {
        return;
      }

      // Set while this opens it modal, so its own toggle isn't turned away.
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
        if (
          event.key === 'Escape' &&
          dismissable.current &&
          element.matches(':popover-open')
        ) {
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

    // Open when `modal` changes, it reopens in the other mode at once.
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
    }, [modal]);

    return (
      <Card
        aria-labelledby={header && !isLabelled ? headerId : undefined}
        {...rest}
        // Fixed chrome, so a frame on the page moves its insets inside the frame's edge.
        className={classNames(
          CLASS_NAME,
          `${CLASS_NAME}--${side}`,
          'kicl-overflow-y-auto',
          'kicl-padding-none',
          'kicl-position-fixed',
          className
        )}
        // As on `Dialog`: a click on the backdrop or Escape closes it while `closable`.
        closedby={closable ? 'any' : 'none'}
        id={id}
        is='dialog'
        popover='manual'
        ref={mergeRefs(node, ref)}
        style={
          {
            [`--${CLASS_NAME}--inline-size`]: `var(--kicl-columns-${size})`,
            ...style,
          } as React.CSSProperties
        }
      >
        {shown && header ? (
          <SheetHeader id={headerId}>{header}</SheetHeader>
        ) : null}
        {shown && closable ? (
          <Button
            aria-label={t('action_close_sheet')}
            className={classNames(
              `${CLASS_NAME}__close`,
              'kicl-position-sticky',
              'kicl-z-index-floating'
            )}
            popoverTarget={id}
            popoverTargetAction='hide'
            size='small'
            variant='secondary'
          >
            <Ri.RiCloseLine aria-hidden />
          </Button>
        ) : null}
        {shown ? (
          <Layout alignContent='start' gap='normal'>
            <section
              className={classNames(
                'kicl-padding-block-end-narrow',
                'kicl-padding-inline'
              )}
            >
              {children}
            </section>
          </Layout>
        ) : null}
        {shown && footer && (
          <SheetFooter justifyContent='end'>{footer}</SheetFooter>
        )}
      </Card>
    );
  }
);

Sheet.displayName = 'Sheet';

export type { SheetProps } from './spec';
export { SheetFooter } from './footer';
export { SheetHeader } from './header';
export { Sheet };
