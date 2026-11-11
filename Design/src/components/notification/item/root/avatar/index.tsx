import React from 'react';

// Context
import { useNotification } from 'design/components/notification/item/context';

// Constants
import { CLASS_NAME } from 'design/components/notification/item/constants';

const Avatar: React.FunctionComponent = () => {
  const { avatar } = useNotification();

  if (!avatar) {
    return null;
  }

  return (
    <span aria-hidden className={`${CLASS_NAME}__avatar`}>
      {avatar}
    </span>
  );
};

export { Avatar };
