import React from 'react';

// Libraries
import classNames from 'classnames';

// Styles
import './styles.scss';

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
    <span
      aria-hidden
      className={classNames(
        `${CLASS_NAME}__avatar`,
        'kicl-aspect-ratio-square',
        'kicl-display-grid'
      )}
    >
      {avatar}
    </span>
  );
};

export { Avatar };
