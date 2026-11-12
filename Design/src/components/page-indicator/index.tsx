import React from 'react';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';

// Partials
import { Provider } from './context';
import { Root } from './root';

const PageIndicator = React.forwardRef<HTMLElement, Spec.Props>(
  ({ pages, ...rest }, ref) => {
    return (
      <Provider pages={pages}>
        <Root {...rest} ref={ref} />
      </Provider>
    );
  }
);

PageIndicator.displayName = 'PageIndicator';

type PageIndicatorPage = Spec.Page;
type PageIndicatorProps = Spec.Props;

export { PageIndicator, type PageIndicatorPage, type PageIndicatorProps };
