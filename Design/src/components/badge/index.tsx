import React from 'react';
import classNames from 'classnames';

//Components
import { Layout } from 'design/components/layout';

import type { BadgeIs, Props } from './spec';
import { BadgeLabel } from './badge-label';

import './styles.scss';

const CLASS_NAME = 'kicl--components--badge';

/**
 * A compact label chip. `variant` sets how it looks and `level` what it
 * means, the same split as `Button`.
 */
const Badge = React.forwardRef<HTMLElement, Props>(
  (
    {
      children,
      className,
      is = 'span',
      level,
      size,
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    const Component = is as BadgeIs;

    return (
      <Layout
        alignContent='center'
        alignItems='center'
        autoFlow='column'
        display='inline-grid'
        gap='narrower'
        justifyContent='center'
        justifyItems='center'
      >
        <Component
          // Discriminated `Props` collapse to a host-specific attrs bag at call
          // sites; the implementation spreads the residual host attrs.
          {...(rest as React.HTMLAttributes<HTMLElement>)}
          className={classNames(
            CLASS_NAME,
            `${CLASS_NAME}--variant--${variant}`,
            {
              [`${CLASS_NAME}--level--${level}`]: level,
              [`${CLASS_NAME}--size--${size}`]: size,
              'kicl-backdrop-blur':
                variant === 'secondary' || variant === 'ghost',
            },
            'kicl-font-weight',
            'kicl-line-height-narrow',
            className
          )}
          ref={ref as never}
        >
          {children}
        </Component>
      </Layout>
    );
  }
);

Badge.displayName = 'Badge';

export type {
  Props as BadgeProps,
  BadgeIs,
  BadgeLabelProps,
  BadgeVariant,
} from './spec';
export { BADGE_VARIANTS } from './spec';
export { BadgeLabel, Badge };
