import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { CardTitle } from 'design/components/card';
import { HyperLink } from 'design/components/hyper-link';

// Styles
import './styles.scss';

// Context
import { useNotification } from 'design/components/notification/item/context';

// Constants
import { CLASS_NAME } from 'design/components/notification/item/constants';

const Title: React.FunctionComponent = () => {
  const { title, to } = useNotification();

  return (
    <CardTitle
      className={classNames(`${CLASS_NAME}__title`, 'kicl-text-truncate')}
      is='h4'
    >
      {to ? (
        <HyperLink to={to} unstyled>
          {title}
        </HyperLink>
      ) : (
        title
      )}
    </CardTitle>
  );
};

export { Title };
