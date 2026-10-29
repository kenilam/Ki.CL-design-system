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

/** Read on each call because the CSS token may not be loaded when this module is. */
const fillsScreen = () => {
  const tablet = getComputedStyle(document.documentElement)
    .getPropertyValue('--kicl-breakpoint-tablet')
    .trim();

  return Boolean(tablet) && matchMedia(`(max-width: ${tablet})`).matches;
};

/** Code that closes the sheet should call `close()` when `open` is set, `hidePopover()` otherwise. */
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
    const shown = useOverlayContents(node, defaultOpen);
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

      const toggle = (event: Event) => {
        report.current?.((event as ToggleEvent).newState === 'open');
      };

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
        className={classNames(
          CLASS_NAME,
          `${CLASS_NAME}--${side}`,
          'kicl-overflow-y-auto',
          'kicl-padding-none',
          'kicl-position-fixed',
          className
        )}
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
        {shown && footer ? (
          <SheetFooter justifyContent='end'>{footer}</SheetFooter>
        ) : null}
      </Card>
    );
  }
);

Sheet.displayName = 'Sheet';

export type { SheetProps } from './spec';
export { SheetFooter } from './footer';
export { SheetHeader } from './header';
export { Sheet };
