import React from 'react';

// Spec
import * as Spec from './spec';

// Partials
import { Provider } from './context';
import { Root } from './root';

const Status: React.FunctionComponent<Spec.Props> = ({
  headingLevel,
  justifyContent,
  level,
  message,
  title,
  ...rest
}) => {
  return (
    <Provider
      headingLevel={headingLevel}
      justifyContent={justifyContent}
      level={level}
      message={message}
      title={title}
    >
      <Root {...rest} />
    </Provider>
  );
};

type StatusProps = Spec.Props;

export { Status, type StatusProps };
