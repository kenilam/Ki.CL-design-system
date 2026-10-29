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

    const shown = useOverlayContents(node, open);

    // Not the `open` attribute: it shows the dialog without the top layer,
    // focus trap or inert background that `showModal()` gives.
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

    // The element fills the window, so a click beside the panel lands on the
    // dialog itself, which `closedby` doesn't count as outside.
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

      return () => {
        dialog.removeEventListener('click', click);
      };
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

                {/* Outside the header so the dialog's name skips its label. */}
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
