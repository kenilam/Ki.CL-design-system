import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Text } from 'design/components/text';

// Context
import { useNotification } from 'design/components/notification/item/context';

// Constants
import { CLASS_NAME } from 'design/components/notification/item/constants';

const Message: React.FunctionComponent = () => {
  const { children } = useNotification();

  if (children === undefined) {
    return null;
  }

  return (
    <Text
      className={classNames(
        `${CLASS_NAME}__message`,
        'kicl-line-height-narrow',
        'kicl-text-truncate'
      )}
      is='p'
    >
      {children}
    </Text>
  );
};

export { Message };
