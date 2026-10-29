import React from 'react';
import classNames from 'classnames';

import { Layout } from 'design/components/layout';

import type { BubbleIs, BubbleProps } from './spec';

const CLASS_NAME = 'kicl--components--bubble';

/**
 * One chat message.
 */
const Bubble = React.forwardRef<HTMLElement, BubbleProps>(
  (
    { children, className, is = 'article', level, variant = 'primary', ...rest },
    ref
  ) => {
    const Component = is as BubbleIs;

    return (
      <Layout gap='narrowest' ref={ref}>
        <Component
          {...(rest as React.HTMLAttributes<HTMLElement>)}
          className={classNames(
            CLASS_NAME,
            `${CLASS_NAME}--variant--${variant}`,
            level && `${CLASS_NAME}--level--${level}`,
            'kicl-position-relative',
            className
          )}
        >
          {children}
        </Component>
      </Layout>
    );
  }
);

Bubble.displayName = 'Bubble';

export { Bubble };
