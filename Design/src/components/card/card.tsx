import React from 'react';
import classNames from 'classnames';

import { Layout } from 'design/components/layout';

import { CardFooter } from './card-footer';
import { CardHeader } from './card-header';

import type { CardIs, CardProps } from './spec';

const CLASS_NAME = 'kicl--components--card';

/**
 * Surface container - API aligned with
 * https://ui.shadcn.com/docs/components/base/card
 */
const Card = React.forwardRef<HTMLElement, CardProps>(
  (
    {
      children,
      className,
      footer,
      gap,
      header,
      is,
      size = 'default',
      level,
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    const Component = is as CardIs;

    // A column of its parts, packed to the top: a card taller than its parts doesn't space them out.
    return (
      <Layout
        alignContent='start'
        gap={gap ?? (size === 'xs' || size === 'sm' ? 'narrow' : 'normal')}
        ref={ref}
      >
        <Component
          {...(rest as React.HTMLAttributes<HTMLElement>)}
          className={classNames(
            CLASS_NAME,
            `${CLASS_NAME}--size--${size}`,
            `${CLASS_NAME}--variant--${variant}`,
            level && `${CLASS_NAME}--level--${level}`,
            variant === 'secondary' && 'kicl-backdrop-blur',
            typeof size === 'number'
              ? `kicl-inline-size-columns-${size}`
              : size !== 'default' &&
                  size !== 'fit' &&
                  `kicl-inline-size-${size}`,
            'kicl-overflow-hidden',
            className
          )}
        >
          {header && <CardHeader>{header}</CardHeader>}
          {children}
          {footer && <CardFooter>{footer}</CardFooter>}
        </Component>
      </Layout>
    );
  }
);

Card.displayName = 'Card';

export { Card };
