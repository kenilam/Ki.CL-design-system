import React, { createContext, useContext, useState } from 'react';

// Spec
import type { NotificationProps } from 'design/components/notification/spec';

type Props = React.PropsWithChildren<
  Pick<NotificationProps, 'avatar' | 'onClear' | 'title' | 'to'> & {
    message: NotificationProps['children'];
  }
>;

type Notification = Pick<
  NotificationProps,
  'avatar' | 'children' | 'onClear' | 'title' | 'to'
> & {
  hide: () => void;
  shown: boolean;
};

const NotificationContext = createContext<Notification | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  avatar,
  children,
  message,
  onClear,
  title,
  to,
}) => {
  const [shown, setShown] = useState(true);

  return (
    <NotificationContext.Provider
      value={{
        avatar,
        children: message,
        hide: () => {
          setShown(false);
        },
        onClear,
        shown,
        title,
        to,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = () => {
  const notification = useContext(NotificationContext);

  if (!notification) {
    throw new Error('useNotification needs a Notification around it.');
  }

  return notification;
};

export { Provider, useNotification };
