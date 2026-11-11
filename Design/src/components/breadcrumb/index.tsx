import React from 'react';

// Partials
import { Provider } from './context';
import { Root } from './root';

// Spec
import * as Spec from './spec';

const Breadcrumb = React.forwardRef<HTMLElement, Spec.Props>(
  ({ crumbs, current, ...rest }, ref) => {
    return (
      <Provider crumbs={crumbs} current={current}>
        <Root {...rest} ref={ref} />
      </Provider>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

export type {
  Crumb,
  Page as BreadcrumbPage,
  Props as BreadcrumbProps,
} from './spec';
export { Breadcrumb };
