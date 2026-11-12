import React from 'react';
import classNames from 'classnames';

import type { CardActionProps } from 'design/components/card/spec';

import './styles.scss';

const CLASS_NAME = 'kicl--components--card__action';

const CardAction: React.FC<CardActionProps> = ({ children }) => {
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    className: classNames(CLASS_NAME, child.props.className),
  });
};

CardAction.displayName = 'CardAction';

export { CardAction };
