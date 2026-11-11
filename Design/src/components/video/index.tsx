import React from 'react';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';

// Partials
import { Provider } from './context';
import { Root } from './root';

const Video = React.forwardRef<HTMLElement, Spec.Props>(
  ({ className, ...props }, ref) => {
    return (
      <Provider {...props}>
        <Root className={className} ref={ref} />
      </Provider>
    );
  }
);

Video.displayName = 'Video';

type VideoProps = Spec.Props;

export { Video, type VideoProps };
