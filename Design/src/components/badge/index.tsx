import React from 'react';
import classNames from 'classnames';

//Components
import { Layout } from 'design/components/layout';

// Helpers
import { truncateText } from 'design/helper';

import type { BadgeIs, Props } from './spec';
import { BadgeLabel } from './badge-label';

import './styles.scss';

const CLASS_NAME = 'kicl--components--badge';

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
          {truncateText(children)}
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
