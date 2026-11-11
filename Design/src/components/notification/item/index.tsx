import React from 'react';

// Spec
import type { NotificationProps } from 'design/components/notification/spec';

// Partials
import { Provider } from './context';
import { Root } from './root';

const Notification = React.forwardRef<HTMLElement, NotificationProps>(
  (
    { avatar, children, onClear, title, to, variant = 'tertiary', ...rest },
    ref
  ) => {
    return (
      <Provider
        avatar={avatar}
        message={children}
        onClear={onClear}
        title={title}
        to={to}
      >
        <Root {...rest} ref={ref} variant={variant} />
      </Provider>
    );
  }
);

Notification.displayName = 'Notification';

export { Notification };
