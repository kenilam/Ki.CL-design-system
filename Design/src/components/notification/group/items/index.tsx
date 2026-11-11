import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { List } from 'design/components/list';
import { ListItem } from 'design/components/list-item';

// Constants
import { CLASS_NAME } from 'design/components/notification/group/constants';

const Items: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <List
      className={classNames(`${CLASS_NAME}__list`, 'kicl-position-relative')}
      gap='narrow'
      is='ol'
    >
      {React.Children.toArray(children).map((child, index) => {
        return (
          <ListItem
            className={`${CLASS_NAME}__item`}
            key={React.isValidElement(child) ? child.key : index}
            style={{ [`--${CLASS_NAME}--index`]: index } as React.CSSProperties}
          >
            {child}
          </ListItem>
        );
      })}
    </List>
  );
};

export { Items };
