import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Animation } from 'design/components/animation';
import { Card } from 'design/components/card';

// Styles
import './styles.scss';

// Spec
import type { NotificationProps } from 'design/components/notification/spec';

// Context
import { useNotification } from 'design/components/notification/item/context';

// Partials
import { Avatar } from './avatar';
import { Clear } from './clear';
import { Message } from './message';
import { Title } from './title';

// Constants
import { CLASS_NAME } from 'design/components/notification/item/constants';

type Props = Omit<
  NotificationProps,
  'avatar' | 'children' | 'onClear' | 'title' | 'to'
> &
  Pick<React.ComponentProps<'article'>, 'ref'>;

const Root: React.FunctionComponent<Props> = ({
  className,
  level,
  ref,
  variant,
  ...rest
}) => {
  const { onClear, shown } = useNotification();

  return (
    <Animation
      in={shown}
      onTransitionEnd={(event: React.TransitionEvent<HTMLElement>) => {
        if (
          !shown &&
          event.target === event.currentTarget &&
          event.propertyName === 'opacity'
        ) {
          onClear?.();
        }
      }}
      property='slide-from-right'
    >
      <Card
        {...rest}
        className={classNames(CLASS_NAME, 'kicl-position-relative', className)}
        gap='narrow'
        is='article'
        level={level}
        ref={ref}
        variant={variant}
      >
        <Avatar />
        <Title />
        <Message />
        <Clear />
      </Card>
    </Animation>
  );
};

export { Root };
