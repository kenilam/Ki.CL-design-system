import React from 'react';
import classNames from 'classnames';

import { Layout } from 'design/components/layout';

import { CardFooter } from './footer';
import { CardHeader } from './header';

import type { CardIs, CardProps } from './spec';

import './styles.scss';
import './styles.size.scss';
import './styles.variant.scss';

const CLASS_NAME = 'kicl--components--card';

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
      level = 'neutral',
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    const Component = is as CardIs;

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
            `${CLASS_NAME}--level--${level}`,
            variant === 'secondary' ? 'kicl-backdrop-blur' : null,
            typeof size === 'number'
              ? `kicl-inline-size-columns-${size}`
              : size !== 'default' && size !== 'fit'
                ? `kicl-inline-size-${size}`
                : null,
            className
          )}
        >
          {header ? <CardHeader>{header}</CardHeader> : null}
          {children}
          {footer ? <CardFooter>{footer}</CardFooter> : null}
        </Component>
      </Layout>
    );
  }
);

Card.displayName = 'Card';

export { Card };
