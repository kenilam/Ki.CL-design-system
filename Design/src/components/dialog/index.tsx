import React, { useEffect, useId, useRef } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components';

// Helpers
import { mergeRefs } from 'design/helper';

// Hooks
import { useOverlayContents } from 'design/hooks';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from './constants';

// Context
import { DialogContext } from './context';

// Partials
import { Close } from './close';

/**
 * A `<dialog>`, and as little around it as the platform allows.
 *
 * What used to live here in JavaScript - a state mirroring `open`, four nested
 * animation wrappers, `inert` toggled by hand during the enter, a `close()`
 * deferred until the exit finished, Escape re-implemented on `keyup`, and a
 * button standing in for a backdrop - is now the element's own behaviour and a
 * transition in the stylesheet.
 *
 * The one thing the platform has no opinion about is that `open` is a prop
 * rather than an attribute: React would set `open` directly, which shows the
 * dialog without giving it the top layer, focus trapping or an inert
 * background. So the prop is applied through `showModal()` instead, and the
 * attribute is never rendered.
 */
const Dialog = React.forwardRef<HTMLDialogElement, Spec.Props>(
  (
    {
      children,
      className,
      closable = true,
      closeIcon: CloseIcon,
      dense = false,
      footer,
      fullScreen = false,
      header,
      open = false,
      ...rest
    },
    ref
  ) => {
    const generated = useId();
    const id = rest.id ?? generated;
    const headerId = `${id}--header`;
    const isLabelled = Boolean(rest['aria-label'] || rest['aria-labelledby']);

    const node = useRef<HTMLDialogElement>(null);

    // Closed, it is only the `<dialog>`, which a command can still open.
    const shown = useOverlayContents(node, open);

    useEffect(() => {
      const dialog = node.current;

      if (!dialog) {
        return;
      }

      if (open && !dialog.open) {
        dialog.showModal();
      }

      if (!open && dialog.open) {
        dialog.close();
      }
    }, [open]);

    /*
     * The element fills the window, so a click beside the panel lands on it
     * rather than outside it, where `closedby` would see it.
     */
    useEffect(() => {
      const dialog = node.current;

      if (!dialog || closable !== true) {
        return;
      }

      const click = (event: MouseEvent) => {
        if (event.target === dialog) {
          dialog.requestClose();
        }
      };

      dialog.addEventListener('click', click);

      return () => dialog.removeEventListener('click', click);
    }, [closable]);

    return (
      <DialogContext.Provider
        value={{ closable, closeIcon: CloseIcon, fullScreen, id }}
      >
        <dialog
          aria-labelledby={header && !isLabelled ? headerId : undefined}
          {...rest}
          id={id}
          ref={mergeRefs(node, ref)}
          className={classNames(
            CLASS_NAME,
            {
              [`${CLASS_NAME}--is-closable`]: closable,
              [`${CLASS_NAME}--is-dense`]: dense,
              [`${CLASS_NAME}--is-full-screen`]: fullScreen,
            },
            'kicl-min-block-size-screen',
            'kicl-overscroll-behavior-contain',
            className
          )}
          closedby={
            closable === true
              ? 'any'
              : closable === 'keyboard'
                ? 'closerequest'
                : 'none'
          }
        >
          {shown ? (
            <Layout alignContent='start'>
              <div
                className={classNames(
                  'kicl-box-shadow-overlay',
                  'kicl-margin-inline-auto',
                  'kicl-position-relative',
                  'kicl-z-index-raised'
                )}
              >
                {header ? <header id={headerId}>{header}</header> : null}

                {/*
                Beside the header rather than in it, sharing its place in the
                panel's grid, so it stays at the top while the header scrolls
                away. It also keeps its label out of the dialog's name.
              */}
                <Close />

                {children}

                {footer ? (
                  <footer className={`${CLASS_NAME}--footer`}>{footer}</footer>
                ) : null}
              </div>
            </Layout>
          ) : null}
        </dialog>
      </DialogContext.Provider>
    );
  }
);

type DialogProps = Spec.Props;

Dialog.displayName = 'Dialog';

export { Dialog, type DialogProps };
