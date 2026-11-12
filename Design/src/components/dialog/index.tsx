import React from 'react';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';

// Partials
import { Provider } from './context';
import { Root } from './root';

const Dialog = React.forwardRef<HTMLDialogElement, Spec.Props>(
  (
    {
      closable,
      closeIcon,
      dense,
      footer,
      fullScreen,
      header,
      id,
      open,
      size,
      ...rest
    },
    ref
  ) => {
    return (
      <Provider
        closable={closable}
        closeIcon={closeIcon}
        dense={dense}
        footer={footer}
        fullScreen={fullScreen}
        header={header}
        id={id}
        open={open}
        size={size}
      >
        <Root {...rest} ref={ref} />
      </Provider>
    );
  }
);

type DialogProps = Spec.Props;

Dialog.displayName = 'Dialog';

export { Dialog, type DialogProps };
