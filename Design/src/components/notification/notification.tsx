import React, { useState } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Animation } from 'design/components/animation';
import { Button } from 'design/components/button';
import { Card, CardTitle } from 'design/components/card';
import { HyperLink } from 'design/components/hyper-link';
import { Text } from 'design/components/text';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Ri from 'react-icons/ri';

// Spec
import type { NotificationProps } from './spec';

const CLASS_NAME = 'kicl--components--notification';

const Notification = React.forwardRef<HTMLElement, NotificationProps>(
  (
    {
      avatar,
      children,
      className,
      level,
      onClear,
      title,
      to,
      variant = 'tertiary',
      ...rest
    },
    ref
  ) => {
    const t = useCopy();
    const [shown, setShown] = useState(true);

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
          className={classNames(
            CLASS_NAME,
            'kicl-position-relative',
            className
          )}
          gap='narrow'
          is='article'
          level={level}
          ref={ref}
          variant={variant}
        >
          {avatar ? (
            <span aria-hidden className={`${CLASS_NAME}__avatar`}>
              {avatar}
            </span>
          ) : null}
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
          {children === undefined ? null : (
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
          )}
          {onClear ? (
            <Button
              aria-label={t('action_clear_notification')}
              className={classNames(
                `${CLASS_NAME}__clear`,
                'kicl-position-relative',
                'kicl-z-index-raised'
              )}
              onClick={(event) => {
                event.stopPropagation();
                setShown(false);
              }}
              type='button'
              unstyled
            >
              <Ri.RiCloseLine aria-hidden />
            </Button>
          ) : null}
        </Card>
      </Animation>
    );
  }
);

Notification.displayName = 'Notification';

export { Notification };
