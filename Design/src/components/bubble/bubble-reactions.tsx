import React from 'react';
import classNames from 'classnames';

import { Layout } from 'design/components/layout';

import type { BubbleReactionsIs, BubbleReactionsProps } from './spec';

const CLASS_NAME = 'kicl--components--bubble__reactions';

/** Small chip that overlaps a corner of the bubble. */
const BubbleReactions = React.forwardRef<HTMLElement, BubbleReactionsProps>(
  ({ children, className, is = 'ul', ...rest }, ref) => {
    const Component = is as BubbleReactionsIs;

    return (
      <Layout alignItems='center' autoFlow='column' gap='narrowest' ref={ref}>
        <Component
          {...(rest as React.HTMLAttributes<HTMLElement>)}
          className={classNames(
            CLASS_NAME,
            'kicl-border-radius-lg',
            'kicl-font-size-small',
            'kicl-position-absolute',
            'kicl-inset-block-end-0',
            'kicl-inset-inline-end-narrow',
            'kicl-z-index-raised',
            className
          )}
        >
          {children}
        </Component>
      </Layout>
    );
  }
);

BubbleReactions.displayName = 'BubbleReactions';

export { BubbleReactions };
