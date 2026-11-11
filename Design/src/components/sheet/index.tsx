import React from 'react';

// Partials
import { Provider } from './context';
import { Root } from './root';

// Spec
import type { SheetProps } from './spec';

// Styles
import './styles.scss';

/** Code that closes the sheet should call `close()` when `open` is set, `hidePopover()` otherwise. */
const Sheet = React.forwardRef<HTMLElement, SheetProps>(
  ({ closable, footer, header, id, ...rest }, ref) => {
    return (
      <Provider closable={closable} footer={footer} header={header} id={id}>
        <Root {...rest} ref={ref} />
      </Provider>
    );
  }
);

Sheet.displayName = 'Sheet';

export type { SheetProps } from './spec';
export { SheetFooter } from './footer';
export { SheetHeader } from './header';
export { Sheet };
