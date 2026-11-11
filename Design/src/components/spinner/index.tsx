import React from 'react';

// Styles
import './styles.scss';

// Spec
import * as Spec from './spec';

// Partials
import { Provider } from './context';
import { Portal } from './portal';
import { Root } from './root';

const Spinner: React.FunctionComponent<Spec.Props> = (props) => {
  return (
    <Provider {...props}>
      <Portal>
        <Root />
      </Portal>
    </Provider>
  );
};

type SpinnerProps = Spec.Props;

export { Spinner, type SpinnerProps };
